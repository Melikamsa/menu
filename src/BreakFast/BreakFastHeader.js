import { useState } from "react";
import BreakFastBox from "./BreakFastBox.js";

function BreakFastHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Turkish breakfast",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B2%DB%B7_IMG_1166-1536x1536.jpg",
      description:
        "انواع مربا،عسل،پنیر،کره،خامه،بورک،بال سوخاری،سیب زمینی،سینی صبحانه",
      price: "950",
    },
    {
      title: "Cheese omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B1_IMG_1172-1-1536x1536.jpg",
      description: "املت پنیری",
      price: "120",
    },
    {
      title: "Vegetabale omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B3_IMG_1169-1024x1024.jpg",
      description: "املت سبزیجات",
      price: "140",
    },
    {
      title: "krakow omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B1_IMG_1173-1024x1024.jpg",
      description: "املت کراکف",
      price: "170",
    },
    {
      title: "Roast beef omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B2_IMG_1175-1024x1024.jpg",
      description: "املت رست بیف",
      price: "180",
    },
    {
      title: "Date omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B2_IMG_1177-1024x1024.jpg",
      description: "املت خرما",
      price: "135",
    },
    {
      title: "omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B1_IMG_1171-1024x1024.jpg",
      description: "املت",
      price: "90",
    },
    {
      title: "Bacon omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B0_IMG_1176-1024x1024.jpg",
      description: "املت بیکن",
      price: "165",
    },
    {
      title: "Fried egg",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B2_IMG_1168-1024x1024.jpg",
      description: "نیمرو",
      price: "80",
    },
    {
      title: "Pepperoni omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B2_IMG_1174-1024x1024.jpg",
      description: "املت پپرونی",
      price: "160",
    },
    {
      title: "Japanese  omelette",
      img: "https://internimenu.ir/wp-content/uploads/2023/05/%DB%B2%DB%B0%DB%B2%DB%B0_%DB%B0%DB%B6_%DB%B1%DB%B0_%DB%B1%DB%B1_%DB%B3%DB%B4_IMG_1170-1024x1024.jpg",
      description: "املت سوسیس ژاپنی",
      price: "150",
    },
    {
      title: "English breakfast",
      img: "https://internimenu.ir/wp-content/uploads/2023/10/IMG_20231009_121042_286-1024x1024.jpg",
      description: "خوراک لوبیا 2 عدد نیمرو بیکن قارچ کبابی سوسیس فرانکفورتر",
      price: "400",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- BreakFast --
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

export default BreakFastHeader;
