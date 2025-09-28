import React from "react";
import Card from "./Card";
import { assets } from "../../assets/assets";

const CategoryFilter = () => {
  
  const categories = [
    { name: "Drivers", value: "drivers", icon: assets.drivers },
    { name: "Merchants", value: "merchants", icon: assets.merchants },
    { name: "Employers", value: "employers", icon: assets.employers },
    { name: "Others", value: "others", icon: assets.others },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full ">
      {categories.map((cat) => (
        <Card
          key={cat.value}
          title={cat.name}
          icon={cat.icon}
          path={`/equbs/category/${cat.value}`} // dynamic route
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
