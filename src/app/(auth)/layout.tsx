import React from "react";
import AuthHeader from "../../components/header/AuthHeader";

export default function layout({ children }: { children: any }) {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="flex w-full max-w-md">
          <AuthHeader />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
