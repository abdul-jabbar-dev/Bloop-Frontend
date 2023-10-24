"use client";
import { DatePicker, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import dayjs from "dayjs";
import type { Dayjs } from 'dayjs';
import { CSSProperties, ReactElement } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  size?: SizeType;
  prefix?: ReactElement | any;
  value?: string;
  label?: string;
  style?: CSSProperties;
  id?: string;
  format?: string
  pickerValue?: Dayjs
  required?: boolean;
  inputClassName?: string;
  onchange?: (e: dayjs.Dayjs | null, a: string) => void,
  picker?: "date" | "week" | "month" | "quarter" | "year",
  isNotEditable?: boolean;
};
export default function FormDatePicker({
  name,
  pickerValue, value,
  placeholder,
  id,
  picker,
  format,
  onchange,
  inputClassName,
  label,
  style,
  required, isNotEditable,
}: Props) {
  const contex = useFormContext();
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
      {(contex?.control) ? <Controller
        defaultValue={value}
        control={contex?.control}
        name={name}
        render={({ field }) =>
          <DatePicker
            {...field}
            style={{ margin: "10px 0", ...style }}
            name={field.name}
            className={inputClassName}
            id={id}
            placeholder={placeholder}
            onChange={onchange === null ? () => { } : onchange}
            picker={picker}

          />

        }
      /> : <DatePicker
        style={{ margin: "10px 0", ...style }}
        name={name}
        className={inputClassName}
        id={id}
        value={pickerValue}
        placeholder={placeholder}
        format={format}
        onChange={onchange === null ? () => { } : onchange}
        picker={picker}

      />}
    </>
  );
}
