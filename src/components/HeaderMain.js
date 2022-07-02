import imgAutarquia from "../assets/imgs/Camada 1.png";
import HeaderListElement from "./HeaderListElement";

const HeaderMain = () => {
  return (
    <ul className="header__main-container">
      <HeaderListElement
        src={imgAutarquia}
        alt="Icon Autarquia"
      ></HeaderListElement>

      <HeaderListElement href="#">Munícipio</HeaderListElement>
      <HeaderListElement href="#">Autarquia360</HeaderListElement>
      <HeaderListElement href="#">Actividade Municipal</HeaderListElement>
      <HeaderListElement href="#">Serviços Online</HeaderListElement>
      <HeaderListElement href="#">Contactos</HeaderListElement>
    </ul>
  );
};

export default HeaderMain;
