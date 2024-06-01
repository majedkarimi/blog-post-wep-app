"use client";
import React, { useState } from "react";

const Upvote = () => {
  const [vote, setVote] = useState(0);
  const handleUpvote = function () {
    setVote(vote + 1);
  };
  console.log(vote);

  return (
    <button
      className="bg-blue-500  mt-3  p-2 border-1 text-white"
      onClick={handleUpvote}
    >
      Upvote posts
    </button>
  );
};

export default Upvote;
