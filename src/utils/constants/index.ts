// import React from "react";

// interface ColumnProps {
//   title: string;
//   dataIndex: string;
//   key: string;
//   render?: (value: any) => React.ReactNode;
// }

// const columns: ColumnProps[] = [
//   {
//     title: "Name",
//     dataIndex: "image",
//     key: "name",
//     render: (image: string) => {
//       return <img src={image} />;
//     },
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
// ];
import React from "react";

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
    render: (opt: Product) => opt.id && <Link to={opt.id}>Подробнее</Link>,
  },
];
export { columns };
