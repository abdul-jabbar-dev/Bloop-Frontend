'use client'
import { FileAddOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Button, Col, Input, Row, Space, Tag } from "antd";
import Link from "next/link";
import Loading from "../loading";
import { ColumnsType } from "antd/es/table";
import TheTable from "../../../../components/ui/data/TheTable";
import { useState } from "react";
import { useDebounced } from "../../../../redux/hooks/hooks";
import { useGetAllServiceQuery } from "../../../../redux/app/service/serviceApi";
import dayjs from "dayjs";


export default function Services() {



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
    const { data, isLoading } = useGetAllServiceQuery(query)

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });
    console.log(data)
    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
    }
    if (!data?.data) {
        return <Loading />
    }
    const columns: ColumnsType<any> = [

        {
            title: 'Service Name',
            dataIndex: 'title',
            key: 'title',

        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Service Category',
            dataIndex: 'serviceTypeId',
            key: 'serviceTypeId',
        }, {
            title: 'Service Area',
            dataIndex: 'serviceArea',
            key: 'serviceArea',
            render: (_, { serviceArea }) => (
                <>
                    {serviceArea.map((tag: string, i: number) => <Tag color={"geekblue"} key={i}>
                        {tag.toUpperCase()}
                    </Tag>)
                    }
                </>
            ),
        }, {
            title: 'status ',
            dataIndex: 'status',
            key: 'status',
            sorter: true,
            render: (dataa) => {
                if (dataa === 'active') {
                    return <Badge status="success" text={dataa} />
                } else if (dataa === 'deactive') {
                    return <Badge status='error' text={dataa} />
                } else {
                    return dataa
                }
            }
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
            render: (row) => (
                <Space size="middle">
                    <a onClick={() => console.log(row)}>Delete</a>
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

    return (
        <Row>
            <Col span={7}>
                <Button className="flex justify-center items-center"><Link href={'/dashboard/services/add-service'}><FileAddOutlined />  Create a Service</Link></Button>
            </Col>

            <Col span={17}>
                <Input addonBefore={<SearchOutlined />} size="large" placeholder="Search here" onChange={(e) => setSearchTerm(e.target.value)} />
            </Col>
            <Col span={24}>
                <TheTable columns={columns} loading={isLoading || !data?.data} dataSource={data?.data} pageSize={size}
                    totalPages={data?.meta?.total}
                    showSizeChanger={true}
                    onPaginationChange={onPaginationChange}
                    expandable={{
                        expandedRowRender: (record) => <div className="w-full m-0 flex gap-x-5">

                            <Col>
                                <img style={{ width: "100px" }} src={record?.image?.url} alt="" />
                            </Col>
                            <Col>
                                {record.details}
                            </Col>
                        </div>,
                        rowExpandable: (record) => record.name !== 'Not Expandable',
                    }}
                    onTableChange={onTableChange}
                    showPagination={true} />

            </Col>
        </Row >
    )
}
