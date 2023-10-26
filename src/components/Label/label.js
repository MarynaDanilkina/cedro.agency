import "./label.css";
import closeSvg from '../../svg/close.svg';
import { useMemo } from "react";

const Label = ({ text, close = true }) => {
  const image = useMemo(() => {
    if (close) {
      return (
        <img src={closeSvg} width='16' height="16" alt='close' />
      )
    }
    return null;
  }, [close])

  return (
    <div className="label">
      <p className="p__label">{text}</p>
      {image}
    </div>
  )
}
export default Label;
