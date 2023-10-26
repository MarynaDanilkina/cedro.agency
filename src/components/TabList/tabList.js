import "./tabList.css";
import Tab from "../Tab/tab";
import { useState } from "react";

const TabList = ({ array }) => {
  const [activeTab, setActiveTab] = useState('Жк');

  return (
    <div className="tabList__container">
      <div className="tabList">
        {array.map((el) => (
          <Tab
            text={el}
            key={el}
            stateOfTab={activeTab === el ? 'active' : 'default'}
            onClick={() => setActiveTab(el)} />
        ))}
      </div>
    </div>
  )
}
export default TabList;
