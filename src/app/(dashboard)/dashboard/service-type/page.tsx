'use client'
import dayjs from "dayjs";
import { useState } from "react";
import TheTable from "../../../../components/ui/data/TheTable";
import { Badge, Button, Col, Input, Row, Space, message } from "antd";
import { useDebounced } from "../../../../redux/hooks/hooks";
import { SearchOutlined } from "@ant-design/icons";
import Loading from "../loading";
import { useCreateServiceTypeMutation, useGetServiceTypeQuery } from "../../../../redux/app/serviceTypeAndProvider/serviceTypeAndProvider";
import FormBody from "../../../../components/ui/formBodyPage/FormBody";
import Form from "../../../../components/ui/form/Form";
import FormInput from "../../../../components/ui/form/FormInput";
import bg from '../../../../assets/servicePage/serviceTypeBG.gif'
import Image from "next/image"; 
export default function ServiceType() { 
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'serviceType'
    const [createdServiceType] = useCreateServiceTypeMutation()
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    query["searchTerm"] = searchTerm;
    const { data, isLoading } = useGetServiceTypeQuery(query)

    const createNewServiceType = (categoryData: { title: string }) => {
        createdServiceType(categoryData).then((rre:any) => {
            
            if ((rre as any)?.data?.data) {
                messageApi.open({
                    key,
                    type: 'success',
                    content: 'Successfully create service category',
                    duration: 2,
                }
                )

            } else {
                messageApi.open({
                    key,
                    type: 'error',
                    content: (rre as any)?.error?.message || (rre as any)?.error?.data,
                    duration: 2,
                }
                )
            }
        }).catch((rre:any) => console.error(rre))
    }

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });
    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }
    if (!(data)) {
        return <Loading />
    }
    const columns = [
        {
            title: 'Category',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: "CreatedAt",
            dataIndex: "createdAt",
            render: function (data: any) {
                return data && dayjs(data).format("MMM D, YYYY hh:mm A");
            },
            sorter: true,
        }, {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a>Delete</a>
                    <a>Edit</a>
                </Space>
            ),
        },
    ];
    const onPaginationChange = (page: number, pageSize: number) => {
        setPage(page);
        setSize(pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        setSortBy(field as string);
        setSortOrder(order === "ascend" ? "asc" : "desc");
    };


    return <>
        <FormBody title="Service Category" image={<Image width={400} height={500} src={bg as any} style={{ width: "100%" }} alt="Service background" />}>
            <Form submitHandler={createNewServiceType}>
                <Row>
                    <Col span={24} >
                        <FormInput required size="large" name="title" label="Service Category" />
                    </Col>

                </Row>
                <Col span={24} className='mt-3'>
                    <Button type="default" htmlType='submit'>Create</Button>
                    {contextHolder}
                </Col>
            </Form>
            <br />
            <hr />
            <br />
            <Row>
                <Col span={17}>
                    <Input addonBefore={<SearchOutlined />} size="large" placeholder="Search here" onChange={(e) => setSearchTerm(e.target.value)} />
                </Col>
            </Row>
            <br />
            <TheTable columns={columns} loading={isLoading || !data} dataSource={data?.data} pageSize={size}
                totalPages={data?.meta?.total}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true} />
        </FormBody>


    </>;
}
