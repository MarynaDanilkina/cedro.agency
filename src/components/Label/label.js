import "./label.css";
import closeSvg from '../../svg/close.svg';
import { useMemo } from "react";

const Label = ({ text, close = true, getActiveData }) => {

  const image = useMemo(() => {
    if (close) {
      return (
        <img src={closeSvg} width='16' height="16" alt='close' onClick={() => getActiveData(text)} />
      )
    }
    return null;
  }, [close, getActiveData, text])

  return (
    <div className="label">
      <p className="p__label">{text}</p>
      {image}
    </div>
  )
}
export default Label;
