import { useMemo, useState } from "react";
import "./tab.css";
import cn from "classnames";

const Tab = ({ text }) => {
  const [active, setActive] = useState(false);

  const classes = useMemo(
    () =>
      cn(
        {
          "tab__container-active": active,
          "tab__container": active === false
        }
      ),
    [active]
  )

  return (
    <div className={classes} onClick={() => setActive(!active)}>
      <p className="p__tab">{text}</p>
    </div>
  )
}
export default Tab;
