import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    
                    appwriteService.getFilePreview(post.featuredImage)
                        .then(url => setImageUrl(url))
                        .catch(err => {
                            console.error("Error fetching image:", err);
                        });
                } else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
    <div className="pt-96 lg:pt-96 3xl:pt-40">
            <Container>
                <div className="flex justify-center mb-4 mt-4 relative p-2">
                    <img
                        src={imageUrl || "https://via.placeholder.com/800x400"}
                        alt={post.title}
                        className="rounded-xl max-w lg:max-w-xl border-2 "
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-4xl font-bold text-white
                    text-center decoration-slate-300">{post.title}</h1>
                </div>
                <div className="browser-css text-white text-wrap indent-3 
                hyphens-auto pb-20 border-t-2 pt-4">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}