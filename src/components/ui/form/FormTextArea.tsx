import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
    name: string;
    label?: string;
    rows?: number;
    value?: string;
    placeholder?: string;
    inputClassName?: string
};

const FormTextArea = ({
    name,
    label,
    rows,
    value,
    inputClassName,
    placeholder,
}: TextAreaProps) => {
    const { control } = useFormContext();
    return (
        <div className={`flex flex-col  w-full`}>
            {label ? label : null}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input.TextArea
                        {...field}
                        rows={rows}
                        className={inputClassName}
                        placeholder={placeholder}
                        defaultValue={value}
                    />
                )}
            />
        </div>
    );
};

export default FormTextArea;