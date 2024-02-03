import Product from "../components/Product"

const products = [
  {
    id: 1,
    name: "Pizza",
    urlImage:"https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.01
  },
  {
    id: 2,
    name: "Hamburger",
    urlImage:"https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.02
  },
  {
    id: 3,
    name: "Sandwich",
    urlImage:"https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.03
  },
  {
    id: 4,
    name: "Cake",
    urlImage:"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.04
  },
  {
    id: 5,
    name: "Cheeseburger",
    urlImage:"https://images.unsplash.com/photo-1554998171-7e599bc95ccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.05
  },
  {
    id: 6,
    name: "Rice",
    urlImage:"https://images.unsplash.com/photo-1627286400579-027de47e9e73?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0.06
  },
];

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