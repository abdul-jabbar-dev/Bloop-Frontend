"use client";
import React from "react";
import Form from "../../../../components/ui/form/Form";
import FormInput from "../../../../components/ui/form/FormInput";
import { Button, Col, Row } from "antd";
import { FacebookOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function page() {
  const formHandler = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
      <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
        Login To Your Account
      </div>
      <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
        <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span>
          <FacebookOutlined /> Login with Facebook
        </span>
      </button>
      <div className="relative mt-10 h-px bg-gray-300">
        <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
          <span className="bg-white px-4 text-xs text-gray-500 uppercase">
            Or Login With Email
          </span>
        </div>
      </div>
      <div className="mt-10">
        <Form submitHandler={formHandler}>
          <Row>
            <Col span={24}>
              <FormInput
                id="email"
                type="email"
                name="email"
                size="large"
                label=" E-Mail Address:"
                placeholder="E-Mail Address"
              />
            </Col>
            <Col span={24}>
              <FormInput
                id="password"
                type="password"
                name="password"
                label=" Password:"
                size="large"
                placeholder="Password"
              />
            </Col>
          </Row>

          <Row className="flex items-center my-6 -mt-1">
            <Col className="flex ml-auto ">
              <a
                href="#"
                className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
              >
                Forgot Your Password?
              </a>
            </Col>
          </Row>

          <Row className="w-full">
            <Button
              htmlType="submit"
              type="primary"
              className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase">Login</span>
            </Button>
          </Row>
        </Form>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          href="/auth/create"
          className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
        >
          <span className="ml-2">You don't have an account?</span>
        </Link>
      </div>
    </div>
  );
}
