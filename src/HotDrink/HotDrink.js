import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function HotDrinkHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Black tea",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Black-tea-59.jpg",
      description: "چای سیاه همراه با باقلوا ، نبات، دارچین و گل محمدی",
      price: "145",
    },
    {
      title: "Green tea",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Green-tea-67.jpg",
      description: "چای سبز همراه با سیروپ عسل، اسلایس لیمو و کوکی",
      price: "110",
    },
    // {
    //   title: "Meat lover’s pizza",
    //   img: "https://internimenu.ir/wp-content/uploads/2023/01/Green-tea-67-2.jpg",
    //   description:
    //     "فیله گوساله، گوشت پولدبیف ، گوشت میتبال ، زیتون، سس مارینارا، پارمسان، ",
    //   price: "435",
    // },
    {
      title: "borage tea",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Green-tea-67-2.jpg",
      description: "گل گاو زبان همراه با سیروپ عسل اسلایس لیمو و کوکی",
      price: "145",
    },
    {
      title: "immune system",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Immune-system-68.jpg",
      description:
        "چای سبز ، لیمو، نعنا تازه، زنجبیل همراه با سیروپ عسل، لیمو و کوکی",
      price: "150",
    },
    {
      title: "Hot & happy",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Hot-happy.jpg",
      description: "ماسالا همراه با شیر و زعفران",
      price: "120",
    },
    {
      title: "Hot chocolate",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Hot-chocolate.jpg",
      description: "هات چاکلت",
      price: "115",
    },
    {
      title: "White cinnamon chocolate",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/White-cinnamon-chocolate.jpg",
      description: "وایت چاکلت همراه با اپینچ ،پودر دارچین",
      price: "120",
    },
    {
      title: "Masala",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Masala.jpg",
      description: "چای ماسالا",
      price: "130",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Hot Drink --
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

export default HotDrinkHeader;
