import { useContext } from "react";
import { FilterContext } from "../contexts/FiltersManger";
import { inventoryData } from "../data";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router";
const ProductPage = () => {
  const {
    setFilterOption,
    setSortBy,
    filterOption,
    lowStock,
    sortBy,
    setLowStock,
  } = useContext(FilterContext);
  console.log(filterOption);
  let prodData = JSON.parse(localStorage.getItem("invenoryNewData"))
    ? JSON.parse(localStorage.getItem("invenoryNewData"))
    : inventoryData;
  if (filterOption !== "All") {
    prodData = prodData.filter((val) => val.department === filterOption);
  }

  if (sortBy !== "") {
    prodData = prodData.sort((a, b) => {
      return a[sortBy] - b[sortBy];
    });
    console.log(sortBy);
  }
  if (sortBy == "name") {
    console.log("hello fuckomg tjasd");
    prodData = prodData.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (lowStock) {
    prodData = lowStock ? prodData.filter((val) => val.stock <= 10) : prodData;
  }
  const nav = useNavigate();
  return (
    <div>
      <div>
        <nav className="flex justify-around">
          <h1 className="text-2xl">Products</h1>
          <select
            className="bg-stone-300 rounded h-7"
            onChange={(event) => setFilterOption(event.target.value)}
          >
            <option selected>{filterOption}</option>
            <option>All</option>
            <option>Kitchen</option>
            <option>Clothing</option>
            <option>Toys</option>
          </select>
          <label>
            <input
              type="checkbox"
              onClick={(e) => setLowStock(e.target.checked)}
            ></input>
            Low Stock Items
          </label>
          <select
            className="bg-stone-300 rounded h-7"
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option></option>
            <option>name</option>
            <option>price</option>
            <option>stock</option>
          </select>
          <button
            onClick={() => nav("/Newitem")}
            className="bg-blue-500 text-lg text-white rounded-md p-2"
          >
            New
          </button>
        </nav>
      </div>
      <section>
        <div className="p-4">
          <table className="table-auto border-collapse border border-slate-500">
            <tr className="bg-stone-300">
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
            {prodData.map((val) => (
              <ProductCard prodItem={val}></ProductCard>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
