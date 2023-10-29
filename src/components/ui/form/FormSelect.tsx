"use client";
import { Col, Divider, Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { DefaultOptionType } from "antd/es/select";
import { CSSProperties, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  size?: SizeType;
  value?: string;
  label?: string;
  style?: CSSProperties;
  id?: string;
  required?: boolean;
  isNotEditable?: boolean,
  optionsValue: DefaultOptionType[],
  ifBorder?: boolean;
  mode?: "multiple" | "tags"

};
export default function FormSelect({
  name,
  value,
  size,
  id,
  label,
  style,
  ifBorder = true,
  required, isNotEditable,
  mode,
  placeholder,
  optionsValue
}: Props) {
  const props = useFormContext();
  if (!optionsValue) {
    return 'No options from select'
  }
  if (isNotEditable) {
    return <p style={style}>{value}</p>
  }
  return (
    <>

      <div className="w-full">
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

        <Select
          id={id}
          size={size}
          mode={mode}
          status={required ? 'error' : ""}
          defaultValue={value}
          style={style}
          popupMatchSelectWidth={500}
          bordered={ifBorder}
          placeholder={placeholder}
          onChange={(value) => props.setValue(name, value)}
          options={optionsValue}
        />
      </div>

    </>
  );
}
