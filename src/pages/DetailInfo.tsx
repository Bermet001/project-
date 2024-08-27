import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getProduct } from "../store/slices/productThunk";
import {
  Row,
  Col,
  Divider,
  Statistic,
  Descriptions,
  Button,
  Skeleton,
} from "antd";
import {
  DollarOutlined,
  CalendarOutlined,
  FolderOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const Detailinfo = () => {
  const { id } = useParams();
  const { product, isLoading } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  console.log(product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  if (isLoading) <Skeleton active style={{ padding: "2rem" }} />;

  const handleGoBack = () => navigate(-1);

  return (
    <div style={{ padding: "2rem" }}>
      <Button
        type="text"
        onClick={handleGoBack}
        style={{ marginBottom: "1rem" }}
      >
        <ArrowLeftOutlined />
        Go Back
      </Button>

      <Row gutter={[24, 24]}>
        <Col span={12}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Col>

        <Col span={12}>
          <h1>{product.name}</h1>

          <Divider />

          <Statistic
            title="Price"
            value={product.price}
            prefix={<DollarOutlined />}
            valueStyle={{ color: "#3f8600" }}
          />

          {product.oldPrice !== undefined && product.oldPrice > 0 && (
            <Statistic
              title="Old Price"
              value={product.oldPrice}
              prefix={<DollarOutlined />}
              valueStyle={{ color: "#cf1322" }}
            />
          )}

          <Statistic
            title="Category"
            value={product.category}
            prefix={<FolderOutlined />}
          />

          {product.createdAt && (
            <Statistic
              title="Created At"
              value={product.createdAt.split("T")[0]}
              prefix={<CalendarOutlined />}
            />
          )}
        </Col>
      </Row>
      <br />
      <br />

      <Descriptions title="Description" layout="vertical" bordered>
        <Descriptions.Item>{product.description}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Detailinfo;
