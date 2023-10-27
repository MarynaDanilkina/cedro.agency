import { useMemo } from "react";
import Droplist from "../Droplist/droplist";
import "./navList.css";
import cn from "classnames";

const NavList = ({ data, activeData, getActiveData }) => {

  const classes = useMemo(
    () =>
      cn(
        {
          "middle": activeData.length === 0,
          "small": activeData.length > 0
        }
      ),
    [activeData]
  )

  return (
    <div className="navList__wrapper">
      <div className={`${classes} navList__container`}>
        {data.data.map((el) => (
          <Droplist key={el} text={el} activeData={activeData} getActiveData={getActiveData} />
        ))}
      </div>
    </div>
  )
}
export default NavList;
