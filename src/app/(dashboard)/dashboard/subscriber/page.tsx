'use client'

import dayjs from "dayjs";
import { useState } from "react";
import { useGetSubscribersQuery } from "../../../../redux/app/users/userApi";
import TheTable from "../../../../components/ui/data/TheTable";
import { Badge, Input, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDebounced } from "../../../../redux/hooks/hooks";
import { SearchOutlined } from "@ant-design/icons";
import Loading from "../loading";

export default function Page() {


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
  const { data: subscriberData, isLoading } = useGetSubscribersQuery(query)
  const data = subscriberData?.data 

  
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
  const columns: ColumnsType = [

    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      children: [{
        title: 'Fist Name',
        dataIndex: 'firstName',
        key: 'firstName',

      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
      },]
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'gender ',
      dataIndex: 'gender',
      key: 'gender',
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
      render: () => (
        <Space size="middle">
          <a>Delete</a>
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
    <Input addonBefore={<SearchOutlined />} size="large" placeholder="Search here" onChange={(e) => setSearchTerm(e.target.value)} />
    <TheTable columns={columns} loading={isLoading || !data?.data} dataSource={data?.data} pageSize={size}
      totalPages={data?.meta?.total}
      showSizeChanger={true}
      onPaginationChange={onPaginationChange}
      onTableChange={onTableChange}
      showPagination={true} />

  </>;
}
