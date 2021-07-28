import React, { Fragment } from "react";
import { Button, Card, Icon, Table } from "rtc-design-prototype";

const TableOrder = (props: any) => {
  const renderItem = (
    _page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: any
  ) => {
    if (type === "prev") {
      return <Button icon="arrow-left" intent="primary" />;
    } else if (type === "next") {
      return <Button icon="arrow-right" intent="primary" />;
    } else {
      return originalElement;
    }
  };
  const columns: any = [
    {
      title: "Order",
      dataIndex: "order",
      sortDirections: ["descend", "ascend"],
      fixed: true,
      sorter: (a: any, b: any) => a.order - b.order,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a: any, b: any) => {
        const fromDate: Date = new Date(b.date);
        const toDate: Date = new Date(a.date);

        return fromDate.getTime() - toDate.getTime();
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Contract",
      dataIndex: "contract",
    },
    {
      title: "Tenor",
      dataIndex: "tenor",
    },
    {
      title: "Book",
      dataIndex: "book",
    },
    {
      title: "Bid/Offer",
      dataIndex: "bidOffer",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Qty",
      dataIndex: "qty",
    },
    {
      title: "VWAP",
      dataIndex: "vWAP",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Charterer",
      dataIndex: "charterer",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <Fragment>
          <Icon icon="eye-open" />
          <Icon icon="duplicate" />
        </Fragment>
      ),
    },
  ];

  return (
    <Card elevation={3}>
      <Table
        columns={columns}
        dataSource={props.dataSource}
        pagination={{
          pageSize: 5,
          itemRender: renderItem,
        }}
      />
    </Card>
  );
};

export default TableOrder;
