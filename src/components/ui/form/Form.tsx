'use client'
import React from 'react'
import { FormProvider, SubmitHandler, UseFormReturn, useForm } from 'react-hook-form'
type Props = {
    children: React.ReactNode | React.ReactElement,
    submitHandler: (data: any, event?: React.BaseSyntheticEvent<object, any, any> | undefined, methods?: UseFormReturn<Record<string, any>, any, undefined>) => void,
    defaultValues?: Record<string, any>,
    id?: string
}
export default function Form({ children,
    id, submitHandler, defaultValues }: Props) {
    const formConfig: Record<string, any> = {};

    if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

    const methods = useForm<Record<string, any>>(formConfig);
    const onSubmit = (data: any, event?: React.BaseSyntheticEvent<object, any, any> | undefined) => {
 
        submitHandler(data, event, methods);


    };
    return (
        <FormProvider {...methods}>
            <form id={id} onSubmit={methods.handleSubmit(onSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    )
}
