import { useEffect, useState } from "react";
import Checkbox from "../Checkbox/checkbox";
import "./droplist.css";

const Droplist = ({ text, activeData, getActiveData }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(activeData.includes(text))
  }, [activeData, text])

  return (
    <div className="droplist__container">
      <div className="droplist" onClick={() => getActiveData(text)}>
        <p className="p__droplist">{text}</p>
        <Checkbox active={active} />
      </div>
    </div>
    
  )
}
export default Droplist;
