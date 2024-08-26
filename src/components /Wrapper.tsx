import { Select, Input, Space, Row, Table, Col, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import styled from "styled-components";
import { getApplications } from "../store/slices/TableThunk";

const { Option } = Select;

const Wrapper = () => {
  const { applications } = useAppSelector((state) => state.table);
  const dispatch = useAppDispatch();

  console.log(applications, "users");

  useEffect(() => {
    dispatch(getApplications());
  }, []);

  const columns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Изображение",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar: string) => (
        <Avatar src={avatar} alt="Товар" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Row justify="space-between" gutter={16}>
        <Col>
          <Input addonAfter={<SearchOutlined />} placeholder="Search by name" />
        </Col>
        <Col>
          <Select
            showSearch
            placeholder="Select category"
            style={{ width: "100%" }}
          >
            <Option value="option1">Опция 1</Option>
            <Option value="option2">Опция 2</Option>
            <Option value="option3">Опция 3</Option>
          </Select>
        </Col>
      </Row>
      <Table dataSource={applications} columns={columns} rowKey="id" />
    </Space>
  );
};

export default Wrapper;
