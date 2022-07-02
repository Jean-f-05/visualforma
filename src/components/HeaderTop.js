import { ReactComponent as IconFace } from "../assets/icons/logo-facebook.svg";
import { ReactComponent as IconInsta } from "../assets/icons/logo-instagram.svg";
import { ReactComponent as IconSearch } from "../assets/icons/search-outline.svg";

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div>
        <IconInsta className={"navIcon"} />
        <IconFace className={"navIcon"} />
      </div>
      <div>
        <IconSearch className={"navIcon"} />
      </div>
    </div>
  );
};

export default HeaderTop;
