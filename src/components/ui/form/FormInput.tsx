"use client";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { CSSProperties, ReactElement } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  size?: SizeType;
  value?: string;
  prefix?: ReactElement | any;
  label?: string;
  style?: CSSProperties; 
  id?: string;
  required?: boolean;
};
export default function FormInput({
  name,
  value,
  placeholder,
  size,
  id,
  type,
  prefix,
  label,
  style,
  required, 
}: Props) {
  const { control } = useFormContext();
  return (
    <>
      {label ? (
        <p>
          {<label
            htmlFor="email"
            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
          >
           {label}
          </label>}
          {required && <sup className="text-red-700">*</sup>}
        </p>
      ) : null}
      <Controller
      
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              style={{ margin: "10px 0", ...style }}
              name={field.name}
              value={value ? value : field.value}
              size={size}
              id={id}
              placeholder={placeholder}
              prefix={prefix}
              required={required} 
            />
          ) : (
            <Input
              {...field}
              name={field.name} 
              style={{ margin: "10px 0", ...style }}
              value={value ? value : field.value}
              size={size}
              id={id}
              placeholder={placeholder}
              prefix={prefix}
              required={required}
            />
          )
        }
      />
    </>
  );
}
