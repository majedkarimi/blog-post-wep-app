import React from "react";
type post = {
  posts: { id: number; title: string; body: string }[];
};
const SinglePost = async ({ params }: { params: { id: string } }) => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = (await response.json()) as post;

  console.log();
  const post = data.posts.find((post) => post.id === +params.id);

  return (
    <main>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </main>
  );
};

export default SinglePost;
