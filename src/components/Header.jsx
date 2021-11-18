import React, { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <header className="py-3">
        <h3 className="text-center">{props.tittle}</h3>
      </header>
    </Fragment>
  );
};

export default Header;
