import { v4 as uuidv4 } from "uuid";
import { AddItem } from "../data";
const NewItem = () => {
  function submitForm(event) {
    event.preventDefault();
    const newItem = {
      id: uuidv4(),
      department: event.target.departmentNames.value,
      name: event.target.name.value,
      description: event.target.descri.value,
      price: Number(event.target.price.value),
      stock: Number(event.target.stock.value),
      sku: event.target.sku.value,
      supplier: event.target.supplier.value,
      delivered: Number(event.target.deliver.value),
      imageUrl: event.target.imageurl.value,
    };
    console.log(newItem);
    AddItem(newItem);
  }
  return (
    <div>
      <form className="flex flex-col" onSubmit={(e) => submitForm(e)}>
        <label>Department</label>
        <select className="bg-stone-300 rounded h-7" id="departmentNames">
          <option></option>
          <option>Kitchen</option>
          <option>Toys</option>
          <option>Clothing</option>
        </select>
        <p>Name</p>
        <input
          className="border-2 border-stone-800"
          type="text"
          id="name"
          required
        ></input>
        <p>Description</p>
        <input
          className="border-2 border-stone-800"
          type="text"
          id="descri"
          required
        ></input>
        <p>Price</p>
        <input
          className="border-2 border-stone-800"
          type="number"
          id="price"
          required
        ></input>
        <p>Stock</p>
        <input
          className="border-2 border-stone-800"
          type="number"
          id="stock"
          required
        ></input>
        <p>SKU</p>
        <input
          className="border-2 border-stone-800"
          type="text"
          id="sku"
          required
        ></input>
        <p>Supplier</p>
        <input
          className="border-2 border-stone-800"
          type="text"
          id="supplier"
          required
        ></input>
        <p>Delivered</p>
        <input
          className="border-2 border-stone-800"
          type="number"
          id="deliver"
          required
        ></input>
        <p>Image URL</p>
        <input
          className="border-2 border-stone-800"
          type="text"
          id="imageurl"
          required
        ></input>
        <button
          className="text-xl text-white bg-blue-500 mt-4 p-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;
