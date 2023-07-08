import readExcelData from "../components/excelData";

import React from "react";

export default function sample() {
  const excelData = readExcelData();
  console.log(excelData);
  console.log("hi");

  return <div className="text-white">sample</div>;
}
