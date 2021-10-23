import React from "react";

const Header = ({ tittle }) => {
  return (
    <header className="py-3">
      <h3 className="text-center">{tittle}</h3>
    </header>
  );
};

export default Header;
