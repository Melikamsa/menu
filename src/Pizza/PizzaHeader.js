import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function PizzaHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "garlic & steak pizza",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/garlic-steak-pizza.jpg",
      description: "فیله استیک،مارینارا، سیر، موزارلا، سس برنیز، پارمسان",
      price: "425",
    },
    {
      title: "Margherita",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Margherita.jpg",
      description: "سس مارینارا ،موتزرلا تازه ،ریحان ،پارمسان، گوجه",
      price: "265",
    },
    {
      title: "Meat lover’s pizza",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Meat-lovers-pizza.jpg",
      description:
        "فیله گوساله، گوشت پولدبیف ، گوشت میتبال ، زیتون، سس مارینارا، پارمسان، ",
      price: "435",
    },
    {
      title: "pulled beef pizza",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/pulled-beef-pizza.jpg",
      description: "گوشت پولدبیف، مارینارا، پارمسان، زیتون، موزارلا، ",
      price: "420",
    },
    {
      title: "interni special pizza",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/interni-special-pizza.jpg",
      description: "بیکن، پپرونی، میتبال، قارچ، موزارلا،سس برنیز",
      price: "390",
    },
    {
      title: "Pepperoni pizza",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Pepperoni-pizza.jpg",
      description: "پپرونی، هالوپینو، پنیر موتزرلا، پارمسان",
      price: "380",
    },
    {
      title: "chicken pesto",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/chicken-pesto.jpg",
      description: "فیله مرغ،سس پستو، گوجه،موزارلا، پارمسان",
      price: "375",
    },
    {
      title: "chicken alfredo pizza",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/chicken-alfredo-pizza.jpg",
      description: "سس آلفردو، فیله مرغ، موزارلا، پارمسان",
      price: "385",
    },
    {
      title: "mix sausage pizza",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9213.jpg",
      description: "چوریتزو ، سوجوک ، پپرونی ، زیتون ، قارچ، کاپاریس ،",
      price: "420",
    },
    {
      title: "Vegetable Pizza ",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Vegetable-Pizza.jpg",
      description: "کدو، پیاز، فلفل دلمه،گوجه، قارچ، زیتون،کاپاریس",
      price: "250",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Pizza --
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

export default PizzaHeader;
