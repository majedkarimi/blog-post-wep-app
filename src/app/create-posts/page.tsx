import { createPost } from "@/actions/action";
import Button from "@/ui/Button";
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
      <form className="form" action={createPost}>
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
        <Button text="Submit" />
      </form>
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
};

export default page;
