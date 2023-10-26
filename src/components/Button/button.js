import "./button.css";
import searchSvg from '../../svg/search.svg';

const Button = () => {
  return (
    <button className="button__container">
      <div className="button">
        <img src={searchSvg} width='16' height="16" alt='search' />
        <p className="p__button">ЖК, Округ, район, метро</p>
      </div>
    </button>
  )
}
export default Button;
