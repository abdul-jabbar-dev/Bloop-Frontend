import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { CSSProperties, useState } from "react";
import { useFormContext } from "react-hook-form";

const getBase64 = ( img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};

type ImageUploadProps = {
    name: string;
    label?: string;
    defaultSrc?: string,
    boxStyle?: CSSProperties,
    styles?: { style?: CSSProperties, width?: number, height?: number }
};

const FormUpload = ({ name, defaultSrc, styles, boxStyle,label }: ImageUploadProps) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const { setValue } = useFormContext();

    const handleChange: UploadProps["onChange"] = (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            setValue(name, info.file.originFileObj);
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };


    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : (defaultSrc ? <Image
                src={defaultSrc}
                alt="avaPtar"
                style={{ ...styles?.style, marginBottom: '-32px' }}
                width={(styles && styles.width) ? styles.width : 300}
                height={(styles && styles.height) ? styles.width : 300}
            /> : <PlusOutlined />)}
            <div style={{ marginTop: 8 }}>Upload</div>




        </div>
    );

    return (
        <div className="relative">
            {label ? (
                <p>
                    {<label
                        htmlFor="email"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                        {label}
                    </label>}

                </p>
            ) : null}
            <Upload
                name={name}
                listType="picture-card"
                className="avatar-uploader  relative overflow-hidden"
                showUploadList={false}
                action="/api/file"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <Image

                        src={imageUrl}
                        className="static top-0"
                        alt="avaPtar"
                        style={styles?.style}
                        width={(styles && styles.width) ? styles.width : 300}
                        height={(styles && styles.height) ? styles.width : 300}
                    />


                ) : (
                    uploadButton
                )}
            </Upload>
        </div>
    );
};

export default FormUpload;