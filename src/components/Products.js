import Product from "../components/Product"

// const products = [
//   {
//     id: 1,
//     name: "Pizza",
//     urlImage:"https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 0.01
//   },
//   {
//     id: 2,
//     name: "Hamburger",
//     urlImage:"https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 0.02
//   },
//   {
//     id: 3,
//     name: "Sandwich",
//     urlImage:"https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 0.03
//   },
//   {
//     id: 4,
//     name: "Cake",
//     urlImage:"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 0.04
//   },
//   {
//     id: 5,
//     name: "Cheeseburger",
//     urlImage:"https://images.unsplash.com/photo-1554998171-7e599bc95ccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 0.05
//   },
//   {
//     id: 6,
//     name: "Rice",
//     urlImage:"https://images.unsplash.com/photo-1627286400579-027de47e9e73?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 0.06
//   },
// ];

const products = [
  {
    id: 1,
    name: "Laptop",
    urlImage: "https://i5.walmartimages.com/seo/HP-15-6-inch-Laptop-Intel-Core-i5-1235U-8GB-RAM-256GB-SSD-Spruce-Blue_c1be9cbf-ec85-4af6-ac21-4a9323c3c5bd.004dea42970dbe0b966e65e36038bd9b.jpeg",
    price: 322,
  },
  {
    id: 2,
    name: "Airpods",
    urlImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
    price: 322,
  },
  {
    id: 3,
    name: "iphone 15",
    urlImage: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184&width=823",
    price: 322,
  },
  {
    id: 4,
    name: "Apple watch ultra 2",
    urlImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT653_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905",
    price: 322,
  },
  {
    id: 5,
    name: "Headphone",
    urlImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097",
    price: 322,
  },
  {
    id: 6,
    name: "Laptop",
    urlImage: "https://i5.walmartimages.com/seo/HP-15-6-inch-Laptop-Intel-Core-i5-1235U-8GB-RAM-256GB-SSD-Spruce-Blue_c1be9cbf-ec85-4af6-ac21-4a9323c3c5bd.004dea42970dbe0b966e65e36038bd9b.jpeg",
    price: 322,
  },
  {
    id: 7,
    name: "Airpods",
    urlImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
    price: 322,
  },
  {
    id: 8,
    name: "iphone 15",
    urlImage: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184&width=823",
    price: 322,
  },
  {
    id: 9,
    name: "Apple watch ultra 2",
    urlImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT653_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905",
    price: 322,
  },
  {
    id: 10,
    name: "Headphone",
    urlImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097",
    price: 322,
  },
]

const Products = () => {
  return (
    <div className="grid">
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
};

export default Products;