import Droplist from "../Droplist/droplist";
import "./navList.css";

const NavList = ({ data, activeData, getActiveData }) => {
  return (
    <div className="navList__wrapper">
      <div className="navList__container">
        {data.data.map((el) => (
          <Droplist key={el} text={el} activeData={activeData} getActiveData={getActiveData} />
        ))}
      </div>
    </div>
  )
}
export default NavList;
