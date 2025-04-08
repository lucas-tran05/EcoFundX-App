'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const projects = [
    {
        id: '1',
        title: "Project 1",
        tag: "Renewable energy",
        description: "Description of project 1",
        image: "/images/post.png",
        endDate: new Date("2026-12-31"),
        progress: 50,
        amount: 1000000,
        onClick: () => console.log("Project 1 clicked"),
    },
    {
        id: '2',
        title: "Project 2",
        tag: "Renewable energy",
        description: "Description of project 2",
        image: "/images/post.png",
        endDate: new Date("2026-01-31"),
        progress: 75,
        amount: 2000000,
        onClick: () => console.log("Project 2 clicked"),
    },
    {
        id: '3',
        title: "Project 3",
        tag: "Renewable energy",
        description: "Description of project 3",
        image: "/images/home.svg",
        endDate: new Date("2026-02-28"),
        progress: 25,
        amount: 500000,
        onClick: () => console.log("Project 3 clicked"),
    },
    {
        id: '4',
        title: "Project 4",
        tag: "Renewable energy",
        description: "Description of project 4",
        image: "/images/post.png",
        endDate: new Date("2026-03-31"),
        progress: 100,
        amount: 1500000,
        onClick: () => console.log("Project 4 clicked"),
    },
    {
        id: '5',
        title: "Project 5",
        tag: "Renewable energy",
        description: "Description of project 5",
        image: "/images/home.svg",
        endDate: new Date("2026-04-30"),
        progress: 10,
        amount: 3000000,
        onClick: () => console.log("Project 5 clicked"),
    },
    {
        id: '6',
        title: "Project 6",
        tag: "Renewable energy",
        description: "Description of project 6",
        image: "/images/post.png",
        endDate: new Date("2026-05-31"),
        progress: 60,
        amount: 1200000,
        onClick: () => console.log("Project 6 clicked"),
    }
]

export default function ViewProject() {
    const { id } = useParams();
    const post = projects.find((p) => p.id === id);

    if (!post) {
        return <div>Post not found!</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <img src={post.image} alt={post.title} style={{ width: '300px', height: 'auto' }} />
            <button onClick={post.onClick}>Donate</button>
        </div>
    )
}
