"use client";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { CSSProperties, ReactElement, useEffect, useState } from "react";
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
  const initial = required ? [undefined] : []
  const [fields, setFields] = useState<Array<string | undefined>>(initial)
  const { control, setValue } = useFormContext();

  if (isNotEditable) {
    return <p style={style}>{value}</p>
  }
  useEffect(() => {
    setValue(name, fields.filter((i) => i !== undefined && i !== null && !(fields[(fields.length - 1)]?.trim() === "")))

  }, [setValue, fields, setFields, setValue])
  useEffect(() => {

    setFields(initial)
  }, [])
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
        {fields.map((value, ind) => (

          <Col key={ind} style={{ width: "100%", display: 'flex', marginBottom: 8, alignItems: 'center' }} >
            <Controller
              name={name + `.${ind}`}
              control={control}
              render={({ field }) => {
                return <Input
                  {...field}
                  style={{ margin: "10px 0", ...style, display: "block" }}
                  size={size}
                  className={inputClassName}
                  id={id && id + ind}
                  name={name + `.${ind}`}
                  onChange={(v) => {
                    const newVal = fields
                    newVal[ind] = v.target.value
                    setFields(newVal)
                    setValue(name, newVal.filter(i => {
                      if (i !== undefined || i !== null || i !== " " || !(fields[(fields.length - 1)]?.trim() === "")) return i
                    }))
                  }}
                  placeholder={placeholder && (placeholder + " no: " + (ind + 1))}
                  prefix={prefix}
                  required={required}
                />
              }
              }
            />
            <div className="grow-0 ml-2" >
              <MinusCircleOutlined onClick={() => {
                if (fields[fields.length] !== undefined || fields[fields.length] !== null) {

                } else {
                  delete fields[length]
                }
                setFields(fields.filter((i, j) => j !== ind))
                setValue(name, (fields.filter((i, j) => {
                  if (j !== ind) {
                    return i
                  } else if (i === undefined || i === null || i == " " || fields[(fields.length - 1)]?.trim() === "") { }
                })))
              }} /></div>
          </Col>
        ))}

        <Button type="dashed" onClick={() => {

          if (!(fields.length === 0) && (fields[(fields.length) - 1] === null || fields[(fields.length - 1)] === undefined)) {
            return
          } else {
            setFields([...fields, undefined])

          }

        }} block icon={<PlusOutlined />}>
          Add field
        </Button>

      </>
    </>

  );
}
