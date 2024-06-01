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
    <main>
      <h1>{post?.title}</h1>
      {post?.excerpt}
    </main>
  );
};

export default SinglePost;
