const HeaderListElement = (props) => {
  return (
    <li className="list">
      {props.src && (
        <img src={props.src} alt={props.alt} href={props.href}></img>
      )}

      <a className="header__main-li" href={props.href}>
        {props.children}
      </a>
    </li>
  );
};

export default HeaderListElement;
