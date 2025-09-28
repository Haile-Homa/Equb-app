
import React from "react";
import Card from "./Card";
import { assets } from "../../assets/assets";


const PeriodsFilter = () => {

    const types = [
    { name: "Daily", value: "daily", icon: assets.daily },
    { name: "Weekly", value: "weekly", icon: assets.weekly },
    { name: "Monthly", value: "monthly", icon: assets.monthly },
  ];


  return (
    <div className="grid grid-cols-3 gap-4">
      {types.map((type) => (
        <Card
          key={type.value}
          title={type.name}
          icon={type.icon}
          path={`/equbs/type/${type.value}`} // dynamic route
        />
      ))}
    </div>
  );
};

export default PeriodsFilter





// import React from "react";
// import Card from "./Card";
// import { assets } from "../../assets/assets";

// const TopFilter = () => {

  
//   const types = [
//     { name: "Daily", value: "daily", icon: assets.daily },
//     { name: "Weekly", value: "weekly", icon: assets.weekly },
//     { name: "Monthly", value: "monthly", icon: assets.monthly },
//   ];


//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {types.map((type) => (
//         <Card
//           key={type.value}
//           title={type.name}
//           icon={type.icon}
//           path={`/equbs/type/${type.value}`} // dynamic route
//         />
//       ))}
//     </div>
//   );
// };

// export default TopFilter;
