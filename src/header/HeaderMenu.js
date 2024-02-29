import { useState } from "react";
import HeaderNav from "./HeaderNav.js";

function Header() {
  const [Item, setItem] = useState([
    {
      name: "Appetizer",
    },
    {
      name: "Food",
    },
    {
      name: "drinks",
    },
  ]);

  return (
    <>
      <div className="bg-[mistyrose] w-[100%] h-[auto] text-[#808080] text-center py-[10px]">
        <p className="font-bold h-[70px] text-[50px]">I N T E R N I</p>
        <p className="xl:text-[20px]">CAFE RESTAURANT</p>
      </div>

      <div className="flex">
        {Item.map((name) => {
          return <HeaderNav name={name.name} />;
        })}
      </div>
    </>
  );
}

export default Header;
