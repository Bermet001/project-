import { Select, Input, Space, Row, Table, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect, useState, useMemo, ChangeEvent } from "react";
import { getProducts, searchProduct } from "../store/slices/productThunk";
import { getColumns } from "../utils/constants";
import { productState } from "../types";

const Wrapper = () => {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [searchText, setSearchtext] = useState("");
  const [filterOption, setFilterOption] = useState("option1");
  const [filteredData, setFilteredData] = useState<productState[]>([]);

  const searchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchtext(e.target.value);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleFilterChange = (value: string) => {
    setFilterOption(value);
    console.log();

    handleSearch(value);
  };

  let sortedData = [
    ...new Map(products.map((item) => [item.category, item])).values(),
  ].sort((a, b) => a.category.localeCompare(b.category));

  console.log(sortedData);

  const handleSearch = (filterOption: string) => {
    if (filterOption === "option2") {
      sortedData = sortedData.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else {
      sortedData = sortedData.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }
    setFilteredData(sortedData);
  };

  useEffect(() => {
    dispatch(searchProduct(searchText));
  }, [searchText]);

  useEffect(() => {
    setFilteredData(sortedData);
  }, [products]);

  const columns = useMemo(() => getColumns(), []);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Row>
        <Col>
          <Input
            onChange={searchChange}
            value={searchText}
            addonAfter={<SearchOutlined />}
            placeholder="Search"
          />
        </Col>

        <Col>
          <Select
            showSearch
            placeholder="Select category"
            value={filterOption}
            onChange={handleFilterChange}
          >
            <Select.Option value="option1">Сначало новые</Select.Option>
            <Select.Option value="option2">Сначало старые</Select.Option>
          </Select>
        </Col>
      </Row>

      <Table
        pagination={{
          position: ["bottomCenter"],
          pageSize: 10,
          showSizeChanger: true,
          responsive: true,
        }}
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
      />
    </Space>
  );
};

export default Wrapper;
