"use client";
import { HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { Row } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthHeader() { ;
  return (
    <Row justify={"space-around"} className="w-full">
      <Link href={"/"}>
        <HomeOutlined /> Home
      </Link>

      {usePathname() === "/auth/create" && (
        <Link href={"/auth/login"}>
          <LoginOutlined /> Login
        </Link>
      )}
    </Row>
  );
}
