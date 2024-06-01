import { createPost } from "@/actions/action";
import React from "react";

const page = () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text:5xl font-bold mb-5">Create Post</h1>
      <form className="h-10 space-x-2 mt-10">
        <input
          className="border rounded px-3 h-full "
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <button className="h-full bg-blue-500 px-5 rounded text-white">
          Submit
        </button>
      </form>
    </main>
  );
};

export default page;
