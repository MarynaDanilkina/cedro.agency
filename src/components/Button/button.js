import "./button.css";
import searchSvg from '../../svg/search.svg';
import { useMemo } from "react";
import cn from "classnames";
import { DropdownTitle } from "../../data/DropdownData";

const Button = ({ onClick, active, sum }) => {

  const classes = useMemo(
    () =>
      cn(
        {
          "button__container active": active,
          "button__container": active === false
        }
      ),
    [active]
  )

  const contentSum = useMemo(() => {
    if (sum > 0) {
      return (
        <div className="sum__container">
          <p className="sum-container__p">{sum}</p>
        </div>
      )
    }
    return null;
  }, [sum])

  return (
    <button className={classes} onClick={onClick}>
      <div className="button">
        <div className="button__info">
          <img src={searchSvg} width='16' height="16" alt='search' />
          <div className="container__p">
            {DropdownTitle.map((data) => (
              <p className="p__button" key={data}>{data},&nbsp;</p>
            ))}
          </div>
        </div>
        {contentSum}
      </div>
    </button>
  )
}
export default Button;
