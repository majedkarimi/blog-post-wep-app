import { createPost } from "@/actions/action";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";
import React from "react";
const page = async () => {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login");
  // }
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text:5xl font-bold mb-5">Create Post</h1>
      <form
        className="space-x-2 mt-10 flex flex-col gap-5 my-10 max-w-[400px] mx-auto"
        action={createPost}
      >
        <input
          className="border rounded px-3 h-10"
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <textarea
          name="body"
          placeholder="body content for new post"
          className=" border rounded px-3 py-2"
          required
          rows={6}
        />
        <button className="bg-blue-500 px-5 rounded text-white h-12">
          Submit
        </button>
      </form>
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
};

export default page;
