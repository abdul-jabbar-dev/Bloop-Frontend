"use client";
import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { CSSProperties,ChangeEventHandler,ReactElement } from "react";
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
  ifBorder?:boolean;
  required?: boolean;
  inputClassName?: string;
  isNotEditable?: boolean; 
};
export default function FormInput({
  name,
  value,
  placeholder,
  size,
  id,
 ifBorder=true,
  type,
  prefix,
  inputClassName,
  label,
  style,
  required, isNotEditable, 
}: Props) {
  const { control } = useFormContext();
  if (isNotEditable) {
    return <p style={style}>{value}</p>
  }
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
        defaultValue={value}
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              style={{ margin: "10px 0", ...style }}
              name={field.name}
              size={size}
              id={id} 
              placeholder={placeholder}
              prefix={prefix}
              required={required}
              bordered={ifBorder}
              className={inputClassName}
            />
          ) : (
            <Input
              {...field}
              name={field.name}
              style={{ margin: "10px 0", ...style }}
              size={size}
              className={inputClassName}
              id={id} 
              type={type}
              bordered={ifBorder}
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
