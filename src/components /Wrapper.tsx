import { Select, Input, Space, Row, Table, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { getProducts } from "../store/slices/TableThunk";
import { Link } from "react-router-dom";
import { Product } from "../types";

const Wrapper = () => {
  const { applications } = useAppSelector((state) => state.table);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const columns = [
    {
      title: "Изображение",
      dataIndex: "image",
      key: "image",

      render: (image: string) => (
        <img
          src={image}
          alt="Товар"
          style={{ maxWidth: "130px", borderRadius: "10px", height: "60px" }}
        />
      ),
    },

    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Детали",
      render: (opt: Product) => opt.id && <Link to={opt.id}>Подробнее</Link>,
    },
  ];

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Row>
        <Col>
          <Input addonAfter={<SearchOutlined />} placeholder="Search by name" />
        </Col>

        <Col>
          <Select showSearch placeholder="Select category">
            <Select.Option value="option1">Опция 1</Select.Option>
            <Select.Option value="option2">Опция 2</Select.Option>
            <Select.Option value="option3">Опция 3</Select.Option>
          </Select>
        </Col>
      </Row>

      <Table dataSource={applications} columns={columns} rowKey="id" />
    </Space>
  );
};

export default Wrapper;
