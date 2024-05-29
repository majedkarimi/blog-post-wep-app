import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1100px] mx-auto bg-white border-r border-l">
      {children}
    </div>
  );
};

export default Container;
