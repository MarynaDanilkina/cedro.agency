import "./checkbox.css";
import tickSvg from '../../svg/tick.svg';
import { useMemo, useState } from "react";
import cn from "classnames";

const Checkbox = () => {
  const [active, setActive] = useState(false)

  const classes = useMemo(
    () =>
      cn(
        {
          "checkbox__active": active,
          "checkbox": active === false
        }
      ),
    [active]
  )

  const image = useMemo(() => {
    if (active) {
      return (
        <img src={tickSvg} width='16' height="16" alt='close' />
      )
    }
    return null;
  }, [active])

  return (
    <div className={classes}
      onClick={setActive}>
      {image}
    </div>
  )
}
export default Checkbox;
