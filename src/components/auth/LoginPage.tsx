"use client";
import React, { useEffect } from "react";

import { Button, Col, Row, message } from "antd";
import { FacebookOutlined, GithubOutlined } from "@ant-design/icons";
import Link from "next/link";

import { redirect } from "next/navigation";
import { useCreateUserByProviderMutation, useLoginMutation } from "../../redux/app/apis/authApi";
import SetLocalStore from "../../helpers/localStore/setLocalStore";
import CONFIG from "../../config";
import Form from "../ui/form/Form";
import FormInput from "../ui/form/FormInput";
import { isLoggedIn, storeUserInfo } from "../../utils/auth.service";
import firebaseApp from "../../utils/auth/firebaseApp";
import TCreateUserData from "../../types/firebase/createUserInfo";

export default function LoginPage() {

    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const [createUserByProvider] = useCreateUserByProviderMutation()
    const [login, { isError, isLoading, isSuccess, data, status, error }] = useLoginMutation()
 
    useEffect(() => {
        const isLogin = isLoggedIn()
        if (isLogin) {
            redirect('/')
        }
        if (isLoading) {
            messageApi.open({
                key,
                type: 'loading',
                content: 'Loading...',
            });
        }
        if (isError) {
            messageApi.open({
                key,
                type: 'error',
                content: 'User login failed! ' + (error as any).data,
                duration: 2,
            })
        } if (isSuccess) {
            messageApi.open({
                key,
                type: 'success',
                content: 'User login successful',
                duration: 2,
            })
        }
    }, [isError, isLoading, isSuccess, data, status, error])
    useEffect(() => {
        const isLogin = isLoggedIn()
        if (isLogin) {
            redirect('/')
        }
    }, [createUserByProvider])


    function signInWithGithub() {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
            duration: 2,
        }
        )
        firebaseApp().signInGithub().then((result) => {
            const user: TCreateUserData = {
                firstName: result.user.displayName?.split(' ')[0],
                lastName: result.user.displayName?.split(' ')[1],
                contactNo: result.user.phoneNumber ? result.user.phoneNumber : undefined,
                email: result.user.email ? result.user.email : undefined,
                profileImage: result.user.photoURL ? result.user.photoURL : undefined,
                providerUid: result.user.uid
            };
            createUserByProvider(user)
                .then((rre: any) => {
                    
                    if (rre?.data?.data) {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Successfully login',
                            duration: 2,
                        }
                        )
                        storeUserInfo({ accessToken: rre.data?.data?.credential.accessToken })
                        redirect('/')
                    } else {
                        messageApi.open({
                            key,
                            type: 'error',
                            content: rre.error?.data?.message || rre?.error?.data,
                            duration: 2,
                        }
                        )
                    }
                })
                .catch((rre:any) => console.error(rre))
        });
    }

    function signInWithFacebook() {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        }
        )
        firebaseApp().signInFacebook().then((result) => {
            const user: TCreateUserData = {
                firstName: result.user.displayName?.split(' ')[0],
                lastName: result.user.displayName?.split(' ')[1],
                contactNo: result.user.phoneNumber ? result.user.phoneNumber : undefined,
                email: result.user.email ? result.user.email : undefined,
                profileImage: result.user.photoURL ? result.user.photoURL : undefined,
                providerUid: result.user.uid
            };
            createUserByProvider(user)
                .then((rre: any) => {
                    
                    if (rre?.data?.data) {
                        messageApi.open({
                            key,
                            type: 'success',
                            content: 'Successfully login',
                            duration: 2,
                        }
                        )
                        storeUserInfo({ accessToken: rre.data?.data?.credential.accessToken })
                        redirect('/')
                    } else {
                        messageApi.open({
                            key,
                            type: 'error',
                            content: rre.error?.data?.message || rre?.error?.data,
                            duration: 2,
                        }
                        )
                    }
                })
                .catch((rre:any) => console.error(rre))

        })
            .catch((error) => {
                const errorMessage = error.message;
                messageApi.open({
                    key,
                    type: 'error',
                    content: errorMessage,
                    duration: 2,
                });
            });
    }
    const formHandler = async (data: any) => {
        const res: any = await login(data) 
        if (res?.data?.data) {
            messageApi.open({
                key,
                type: 'success',
                content: 'Successfully login',
                duration: 2,
            }
            )
            storeUserInfo({ accessToken: res.data?.data?.accessToken })
            redirect('/')
        } else {
            messageApi.open({
                key,
                type: 'error',
                content: res.error?.data?.message || res?.error?.data,
                duration: 2,
            }
            )
        }



        if (res?.data?.data) {
            SetLocalStore(CONFIG.authKey, res?.data?.data?.accessToken)
            redirect('/')
        }
    };
    return (
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
                Login To Your Account {contextHolder}
            </div>
            <button onClick={signInWithFacebook} className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                    <i className="fab fa-facebook-f"></i>
                </span>
                <span>
                    <FacebookOutlined /> Login with Facebook
                </span>
            </button>

            <button onClick={signInWithGithub} className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                    <i className="fab fa-facebook-f"></i>
                </span>
                <span>
                    <GithubOutlined /> Login with Github
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
