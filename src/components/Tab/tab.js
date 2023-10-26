import { useMemo } from "react";
import "./tab.css";
import cn from "classnames";

const Tab = ({ text, stateOfTab = 'default', onClick }) => {

  const classes = useMemo(
    () =>
      cn(
        {
          "tab__container-active": stateOfTab === 'active',
          "tab__container": stateOfTab === 'default'
        }
      ),
    [stateOfTab]
  )

  console.log(stateOfTab);

  return (
    <div className={classes} onClick={onClick}>
      <p className="p__tab">{text}</p>
    </div>
  )
}
export default Tab;
