"use client";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Input, InputRef, Row, Select, Space } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  size?: SizeType;
  value?: string;
  label?: string;
  defaultValue?: string;
  style?: CSSProperties;
  id?: string;
  required?: boolean;
  isNotEditable?: boolean,
  optionsValue: string[],
  ifBorder?: boolean;

};

let index = 0;
export default function FormSelectAndNew({
  name: filedName,
  value,
  size,
  id,
  defaultValue,
  label,
  style,
  ifBorder = true,
  required, isNotEditable,
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
  useEffect(() => {
    props.setValue(filedName, defaultValue || '')
  }, [])
  const [items, setItems] = useState(optionsValue);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);



  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };


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
          style={style}
          onChange={(v, o) => props.setValue(filedName, v)}
          placeholder={placeholder}
          defaultValue={defaultValue}
          bordered={ifBorder}
          id={id}
          size={size}
          dropdownRender={(menu) => (
            <>
              {menu}
              <Divider style={{ margin: '8px 0' }} />
              <div style={{ padding: '0 8px 4px' }}>
                <Row justify={'space-between'}>
                  <Col span={18}>
                    <Input
                      ref={inputRef}
                      onChange={(event) => setName(event.target.value)}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                  </Col>
                  <Col span={5}>
                    <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                      Add item
                    </Button>
                  </Col>
                </Row>
              </div>
            </>
          )}
          options={items.map((item) => ({ label: item, value: item }))}
        />

      </div>

    </>
  );
}
