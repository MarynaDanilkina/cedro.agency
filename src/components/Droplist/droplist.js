import { useState } from "react";
import Checkbox from "../Checkbox/checkbox";
import "./droplist.css";

const Droplist = ({ text }) => {
  const [active, setActive] = useState(false)

  return (
    <div className="droplist__container">
      <div className="droplist" onClick={() => setActive(!active)}>
        <p className="p__droplist">{text}</p>
        <Checkbox active={active} />
      </div>
    </div>
    
  )
}
export default Droplist;
