import Link from "next/link";
import React from "react";
type post = {
  posts: { id: 7; title: "This is important to remember." }[];
};
const PostItem = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = (await response.json()) as post;
  return (
    <ul>
      {data.posts.map((post) => (
        <li key={post.id} className="mt-5">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostItem;
