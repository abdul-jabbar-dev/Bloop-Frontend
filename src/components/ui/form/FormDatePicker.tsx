"use client";
import { DatePicker, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import dayjs from "dayjs";
import type { Dayjs } from 'dayjs';
import moment from "moment";
import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { dateFormat } from "../../../constaint/dateFormat";

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
  ifDisabledPast?: boolean,
  format?: string
  pickerValue?: Dayjs
  required?: boolean;
  inputClassName?: string;
  DisabledDays?: Dayjs[]
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
  DisabledDays,
  ifDisabledPast,
  label,
  style,
  required, isNotEditable,
}: Props) { 
  const contex = useFormContext()


  const handleChange = (value: dayjs.Dayjs, dateString: string) => {

    onchange && onchange(value, dateString)
  }

  const DisableDate = (current: Dayjs): boolean => {
    var startDate = moment().subtract(1, 'days')
    if (DisabledDays !== undefined) {
      var endDate = DisabledDays?.map((d: Dayjs) => moment(d.toDate()).format(dateFormat));
      if (endDate?.includes(current?.format(dateFormat))) return true
    }
    if (ifDisabledPast) {
      return startDate > current
    }
    return false

  }
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
      {(contex?.control) && <Controller
        defaultValue={value}
        control={contex?.control}
        name={name}
        render={({ field }) =>
          <DatePicker
            {...field}
            disabledDate={DisabledDays !== undefined ? DisableDate : undefined}
            style={{ margin: "10px 0", ...style }}
            name={name}
            className={inputClassName}
            id={id}
            format={format}
            placeholder={placeholder}
            onChange={onchange === null ? () => { } : ((value: dayjs.Dayjs, dateString: string) => handleChange(value, dateString))}
            picker={picker}
          />

        }
      /> /* : <DatePicker
        disabledDate={DisableDate}
        // disabledDate={(ifDisabledPast && DisabledDays) ? DisableDate : undefined}
        style={{ margin: "10px 0", ...style }}
        name={name}
        className={inputClassName}
        id={id}
        value={pickerValue}
        placeholder={placeholder}
        format={format}
        onChange={onchange === null ? () => { } : onchange}
        picker={picker}

      />
      */
      }
    </>
  );
}
