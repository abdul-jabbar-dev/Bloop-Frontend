import { Controller, useFormContext } from "react-hook-form";
import { Input } from "antd";
import { useEffect } from "react";

export default function FormCheckBox(
  { text, id = "choose-me", name, setChange, defaultCheck }
    : { text: string, name: string, id?: string, setChange?: (value: boolean) => void, defaultCheck?: boolean }) {

  const { control, setValue } = useFormContext();
  useEffect(() => {
    setValue(name, !!defaultCheck)
   }, [])
  return (
    <div className="  flex items-center justify-center">
      <div className="flex ">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultCheck}
          render={({ field }) => (
            <Input {...field} style={{ display: 'none' }} type="checkbox" onChange={(e) => setValue(name, (!!e.target.checked))} id={id} defaultChecked={defaultCheck} className="peer hidden" />
          )}
        />
        <label htmlFor={id} className="
            select-none cursor-pointer
            rounded-lg border-2
            py-1 px-3 font-semibold
            transition-colors duration-200 ease-in-out
          text-gray-900 
          outline-gray-950 outline outline-1
          ring-offset-slate-50 
          peer-checked:bg-gray-900 bg-gray-200
          peer-checked:text-gray-200 
          peer-checked:border-gray-200 border-gray-200
           ">{text}</label>
      </div>
    </div>
  )
}
