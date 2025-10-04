import React from "react";

const OverviewItem = ({ label, value }) => (
  <div>
    <p className="text-lg sm:text-xl font-bold">{value} ETB</p>
    <p className="text-xs sm:text-sm opacity-90">{label}</p>
  </div>
);

export default OverviewItem;
