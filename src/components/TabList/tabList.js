import "./tabList.css";
import Tab from "../Tab/tab";

const TabList = ({ array, activeTab, getActiveTab }) => {

  return (
    <div className="tabList__container">
      <div className="tabList">
        {array.map((el) => (
          <Tab
            text={el}
            key={el}
            stateOfTab={activeTab === el ? 'active' : 'default'}
            onClick={() => getActiveTab(el)} />
        ))}
      </div>
    </div>
  )
}
export default TabList;
