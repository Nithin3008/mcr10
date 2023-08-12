import React from "react";
import { inventoryData } from "../data";
import Cards from "../components/Cards";
const Dashboard = () => {
  const stockData = JSON.parse(localStorage.getItem("invenoryNewData"))
    ? JSON.parse(localStorage.getItem("invenoryNewData")).reduce(
        (acc, val) => acc + val.stock,
        0
      )
    : [...inventoryData].reduce((acc, val) => acc + val.stock, 0);
  const deliveryData = JSON.parse(localStorage.getItem("invenoryNewData"))
    ? JSON.parse(localStorage.getItem("invenoryNewData")).reduce(
        (acc, val) => acc + val.delivered,
        0
      )
    : [...inventoryData].reduce((acc, val) => acc + val.delivered, 0);

  const lowStockData = JSON.parse(localStorage.getItem("invenoryNewData"))
    ? JSON.parse(localStorage.getItem("invenoryNewData")).reduce((acc, val) => {
        if (val.stock <= 10) {
          return (acc = acc + 1);
        }
        return acc;
      }, 0)
    : [...inventoryData].reduce((acc, val) => {
        if (val.stock <= 10) {
          return (acc = acc + 1);
        }
        return acc;
      }, 0);
  return (
    <div className="flex gap-3 justify-center mt-6">
      <Cards
        cardDataName={"Total Stock Data"}
        cardDataNumber={stockData}
      ></Cards>
      <Cards
        cardDataName={"Total Delviered"}
        cardDataNumber={deliveryData}
      ></Cards>
      <Cards cardDataName={"Low Stock"} cardDataNumber={lowStockData}></Cards>
    </div>
  );
};

export default Dashboard;
