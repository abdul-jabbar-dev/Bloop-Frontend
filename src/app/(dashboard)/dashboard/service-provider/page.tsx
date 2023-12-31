'use client'
import dayjs from "dayjs";
import { useState } from "react";
import TheTable from "../../../../components/ui/data/TheTable";
import { Badge, Button, Col, Input, Row, Space } from "antd";
import { useDebounced } from "../../../../redux/hooks/hooks";
import { SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useGetServiceProviderQuery } from "../../../../redux/app/serviceTypeAndProvider/serviceTypeAndProvider";
import Loading from "../loading";

export default function ServiceProvider() {


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
  const { data: serviceProviderData, isLoading } = useGetServiceProviderQuery(query)
  const data = serviceProviderData?.data
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }


  if (!(data?.data)) {
    return <Loading />
  }
  const columns = [{
    title: 'Provider Id',
    dataIndex: 'providerId',
    key: 'providerId',
    fixed: 'left',
    width: 80,
  }, {
    title: 'Full Name',
    dataIndex: 'user',
    render: (a: any) => a?.firstName + " " + a?.lastName,
    key: 'user',

  },
  {
    title: 'Email',
    dataIndex: 'user',
    render: (a: any) => a?.email,
    key: 'user.email',
  }, {
    title: 'Service Category',
    dataIndex: 'serviceType',
    render: (a: any) => a.title,
    key: 'serviceType',
  }, {
    title: 'Gender ',
    dataIndex: 'user',
    render: (a: any) => a?.gender || <p className="text-2xl">-</p>,
    key: 'user.gender',
  }, {
    title: 'Status ',
    dataIndex: 'status',
    key: 'status',
    sorter: true,
    render: (dataa: any) => {
      if (dataa === 'active') {
        return <Badge status="success" text={dataa} />
      } else if (dataa === 'deactive') {
        return <Badge status='error' text={dataa} />
      } else {
        return dataa
      }
    }
  }, {
    title: 'Availability ',
    dataIndex: 'availability',
    key: 'availability',
    sorter: true,
    render: (availability: boolean) => {
      if (availability) {
        return <Badge status="success" text={'Free'} />
      } else {
        return <Badge status='error' text={'Busy'} />
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
    <Row>
      <Col span={7}>
        <Button className="flex justify-center items-center"><Link href={'/dashboard/service-provider/add-provider'}><UserAddOutlined />  Make a service Provider</Link></Button>
      </Col>

      <Col span={17}>
        <Input addonBefore={<SearchOutlined />} size="large" placeholder="Search here" onChange={(e) => setSearchTerm(e.target.value)} />
      </Col>
    </Row>
    <TheTable columns={columns} loading={isLoading || !data?.data} dataSource={data?.data} pageSize={size}
      totalPages={data?.meta?.total}
      showSizeChanger={true}
      rowKey='id'
      onPaginationChange={onPaginationChange}
      onTableChange={onTableChange}
      showPagination={true} />

  </>;
}
