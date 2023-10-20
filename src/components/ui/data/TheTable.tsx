"use client";

import { Table } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { ExpandableConfig } from "antd/es/table/interface";

type UMTableProps = {
    loading?: boolean;
    columns: any;
    dataSource: any;
    pageSize?: number;
    totalPages?: number;
    showSizeChanger?: boolean;
    onPaginationChange?: (page: number, pageSize: number) => void;
    onTableChange?: (pagination: any, filter: any, sorter: any) => void;
    showPagination?: boolean;
    expandable?: ExpandableConfig<AnyObject> | undefined
};

const TheTable = ({
    loading = false,
    columns,
    dataSource,
    pageSize,
    totalPages,
    showSizeChanger = true,
    onPaginationChange,
    onTableChange,
    expandable,
    showPagination = true,
}: UMTableProps) => {
    const paginationConfig = showPagination
        ? {
            pageSize: pageSize,
            total: totalPages,
            pageSizeOptions: [5, 10, 20],
            showSizeChanger: showSizeChanger,
            onChange: onPaginationChange,
        }
        : false;

    return (
        <Table
            loading={loading}
            expandable={expandable}
            columns={columns}
            dataSource={dataSource}
            pagination={paginationConfig}
            onChange={onTableChange}
        />
    );
};

export default TheTable;