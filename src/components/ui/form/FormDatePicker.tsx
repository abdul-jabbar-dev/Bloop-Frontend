"use client";
import { DatePicker, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
 
import { CSSProperties,  ReactElement } from "react";
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
  inputClassName?: string;
  picker?: "date" | "week" | "month" | "quarter" | "year",
  isNotEditable?: boolean;
};
export default function FormDatePicker({
  name,
  value,
  placeholder,
  id,
  picker,
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
          <DatePicker
            {...field}
            style={{ margin: "10px 0", ...style }}
            name={field.name}
            className={inputClassName}
            id={id} 
            placeholder={placeholder}
            onChange={(e, a) => console.log(e, a, i)}
            picker={picker}
            
          />

        }
      />
    </>
  );
}
