'use client'
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
type Props = {
    children: React.ReactNode | React.ReactElement,
    submitHandler: (data: any) => void,
    defaultValues?: Record<string, any>
}
export default function Form({ children, submitHandler, defaultValues }: Props) {
    const formConfig: Record<string, any> = {};

    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

    const methods = useForm<Record<string, any>>(formConfig);
    const onSubmit = (data: any) => {
        submitHandler(data);
        methods.reset();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    )
}
