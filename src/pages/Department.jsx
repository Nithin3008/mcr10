import React, { useContext } from "react";
import { inventoryData } from "../data";
import Cards from "../components/Cards";
import { useNavigate } from "react-router";
import { FilterContext } from "../contexts/FiltersManger";
const Department = () => {
  const deptData = inventoryData.map((val) => val.department);
  const { setFilterOption } = useContext(FilterContext);
  const newDeptData = [...new Set(deptData)];
  const nav = useNavigate();
  return (
    <div>
      <div className="flex gap-2 justify-center mt-6">
        {newDeptData.map((val) => (
          <li
            className="list-none"
            onClick={() => {
              setFilterOption(val);
              nav("/Productpage");
            }}
          >
            <Cards cardDataName={val}></Cards>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Department;
