import Upvote from "@/components/Upvote";
import React from "react";
type post = {
  data: { title: string; excerpt: string }[];
};
const SinglePost = async ({ params }: { params: { id: string } }) => {
  const response = await fetch("https://mobapi.banimode.com/api/v1/blog-post");
  const data = (await response.json()) as post;

  console.log();
  const post = data.data.find((post, index) => index === +params.id);

  return (
    <main className="text-center pt-12 px-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-5">{post?.title}</h1>
      <div className="text-lg">{post?.excerpt}</div>
      <Upvote />
    </main>
  );
};

export default SinglePost;
