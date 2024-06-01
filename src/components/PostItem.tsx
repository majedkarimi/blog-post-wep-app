import Link from "next/link";
import React from "react";
type post = {
  data: { title: string; excerpt: string }[];
};
const PostItem = async () => {
  const response = await fetch("https://mobapi.banimode.com/api/v1/blog-post");
  const data = (await response.json()) as post;
  return (
    <ul>
      {data.data.map((post, index) => (
        <li key={index} className="mt-5">
          <Link href={`/posts/${index}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostItem;
