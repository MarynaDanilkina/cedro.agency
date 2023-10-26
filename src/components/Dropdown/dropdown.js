import "./dropdown.css";
import TabList from "../TabList/tabList";
import { DropdownData, DropdownTitle } from "../../data/DropdownData";
import React, { useCallback, useEffect, useState } from "react";
import NavList from "../NavList/navList";

const Dropdown = ({activeData, getActiveData}) => {
  const [activeTab, setActiveTab] = useState('Жк');
  const [data, setData] = useState(DropdownData[0]);

  const getActiveTab = useCallback((tab) => {
    setActiveTab(tab);
  }, [])

  useEffect(() => {
    const newData = DropdownData.filter((data) => data.title === activeTab)
    setData(...newData);
  }, [activeTab]);

  return (
    <button className="dropdown__container">
      <TabList array={DropdownTitle} activeTab={activeTab} getActiveTab={getActiveTab} />
      <NavList data={data} activeData={activeData} getActiveData={getActiveData} />
    </button>
  )
}
export default Dropdown;
