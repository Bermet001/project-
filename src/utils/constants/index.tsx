import { Link } from "react-router-dom";
import { Product } from "../../types";

const getColumns = () => [
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
    render: (opt: Product) =>
      opt.id && <Link to={`product/${opt.id}`}>Подробнее</Link>,
  },
];
export { getColumns };
