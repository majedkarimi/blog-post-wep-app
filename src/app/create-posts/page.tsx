import React from "react";

const page = () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text:5xl font-bold mb-5">Create Post</h1>
      <form className="h-10 space-x-2 mt-10" action="">
        <input className="border rounded px-3 h-full" type="text" />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default page;
