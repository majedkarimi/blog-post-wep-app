import PostItem from "@/components/PostItem";
import React, { Suspense } from "react";
const Posts = async () => {
  return (
    <main className="text-center pt-12 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Post</h1>

      {/* with suspense we can loading in spicific position on page */}
      <Suspense fallback={"Loading..."}>
        <PostItem />
      </Suspense>
    </main>
  );
};

export default Posts;
