"use client";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { CSSProperties, ReactElement } from "react";
import { Controller, useFieldArray, useForm, useFormContext } from "react-hook-form";

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
  isNotEditable?: boolean
};
export default function FormInput({
  name,
  value,
  placeholder,
  size,
  id,
  prefix,
  inputClassName,
  label,
  style,
  required, isNotEditable
}: Props) {

  const { control, getValues } = useFormContext();
  const { fields, append,  } = useFieldArray({
    control,
    name,
  });
  if (isNotEditable) {
    return <p style={style}>{value}</p>
  }
  console.log()
  return (
    <>
      {label ? (
        <p>
          {<label
            htmlFor={id}
            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
          >
            {label}
          </label>}
          {required && <sup className="text-red-700">*</sup>}
        </p>
      ) : null}

      <>
        {fields.map((item, index) => (

          <Col key={index} style={{ width: "100%", display: 'flex', marginBottom: 8, alignItems: 'center' }} >
            <Controller
              name={name + `.${index}`}
              control={control}
              render={({ field }) => {
                return <Input
                  {...field}
                  name={field.name}
                  style={{ margin: "10px 0", ...style, display: "block" }}
                  size={size}
                  className={inputClassName}
                  id={id}
                  placeholder={placeholder && (placeholder + " no: " + (index + 1))}
                  prefix={prefix}
                  required={required}
                />
              }
              }
            />
            <div className="grow-0 ml-2" >
              <MinusCircleOutlined onClick={() => {
                console.log(getValues(name)?.length - 1)
                resetField(name + `.${index}`) 
                remove(getValues(name)?.length-1)
              }} /></div>
          </Col>
        ))}
        <Button type="dashed" onClick={() => append(null)} block icon={<PlusOutlined />}>
          Add field
        </Button>

      </>
    </>

  );
}
