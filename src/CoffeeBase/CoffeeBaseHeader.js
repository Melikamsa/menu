import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function CoffeeBaseHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Espresso single",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Espresso-single.jpg",
      description: "اسپرسو سینگل",
      price: "99",
    },
    {
        title: "Espresso double",
        img: "https://internimenu.ir/wp-content/uploads/2023/01/Espresso-double.jpg",
      description: "اسپرسو دبل",
      price: "110",
    },
    {
      title: " Cortado",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Cortado.jpg",
      description:
        "نسبت یک به یک شیر و قهوه",
      price: "110",
    },
    {
      title: "Caramel macchiato",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Caramel-macchiato.jpg",
      description: " کارامل ماکیاتو",
      price: "140",
    },
    {
      title: "Mocha",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Mocha.jpg",
      description:
        "موکا",
      price: "115",
    },
    {
      title: "Affogato",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Affogato.jpg",
      description: "آفوگاتو همراه با گرانول",
      price: "125",
    },
    {
      title: "Americano",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Americano.jpg",
      description: "آمریکانو",
      price: "95",
    },
    {
      title: "Cappuccino",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Cappuccino.jpg",
      description: "کاپوچینو",
      price: "100",
    },
    {
      title: "Latte",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Latte.jpg",
      description: "لته",
      price: "110",
    },
    {
        title: "espresso romano",
        // img: breakfast,
        description: "اسپرسو همراه با وج لیمو",
        price: "100",
      },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Coffee Base --
      </p>

      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
  {ProductList.map((item) => {
        return (
          <BreakFastBox
            title={item.title}
            img={item.img}
            description={item.description}
            price={item.price}
          />
        );
      })}
</div>
    </>
  );
}

export default CoffeeBaseHeader;
