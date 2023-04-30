import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductGallery.css";

function ProductGallery() {
  const [items, setItems] = useState(null);
  {
    async function fetchItemData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setItems(data);
    }
    useEffect(() => {
      fetchItemData();
    }, []);
  }

  if (items === null) {
    return <p> Loading items...</p>;
  }

  return (
    <main className="items-gallery">
      <div className="form-container">
        <form className="form-item">
          <input type="text" className="input-button"></input>
          <button className="search-button">Search</button>
        </form>
      </div>
      <div className="gallery">
        {items.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default ProductGallery;
