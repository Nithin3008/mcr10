const ProductCard = ({ prodItem }) => {
  return (
    <tr>
      <td>
        {" "}
        <img className="h-20" src={prodItem.imageUrl}></img>
      </td>
      <td>
        <p>{prodItem.name}</p>
      </td>
      <td>
        <p>{prodItem.description}</p>
      </td>
      <td>
        <p>{prodItem.price}</p>
      </td>
      <td>
        <p>{prodItem.stock}</p>
      </td>
      <td>
        <p>{prodItem.supplier}</p>
      </td>
    </tr>
  );
};

export default ProductCard;
