"use client"

import createNewPost from "@/components/posts/createPost";
import React, { useState } from "react";
import "./createPosts.css";

const CreatePosts = ({ onClose }: any) => {

    const [formData, setFormData] = useState({ title: "", subTitle: "", date: "", description: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        createNewPost(formData);
        window.location.reload();
        onClose();
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg min-w-[700px]">
                {<button onClick={() => onClose()} className="closeDialogue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>}
                <h1 className="text-xl font-bold mb-6 text-gray-700">Create blog</h1>
                <form id="blogForm" className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
                        <input type="text" id="title" onChange={handleChange} name="title" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500" required value={formData.title} />
                    </div>

                    <div>
                        <label htmlFor="subTitle" className="block text-gray-700 font-bold mb-2">Subtitle:</label>
                        <input type="text" id="subtitle" name="subTitle" onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500" value={formData.subTitle} />
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date:</label>
                        <input type="date" id="date" name="date" onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500" required value={formData.date} />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
                        <input id="description" name="description" onChange={handleChange} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500" required value={formData.description} />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500">Create Post</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePosts;