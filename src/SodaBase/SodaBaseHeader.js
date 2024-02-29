import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function SodaBaseHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Fizzy berry",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Fizzy-berry.jpg",
      description:
        "سودا همراه با توت فرنگی ، اسلایس لیمو ، شاه توت ، میوه کاکتوس ",
      price: "105",
    },
    {
      title: "Double seven",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Double-seven.jpg",
      description: "سودا، اسلایس لیمو، زیتون",
      price: "85",
    },
    {
      title: "Coca soda",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Coca-soda.jpg",
      description: "کوکا کولا، سودا، توت فرنگی و لیمو",
      price: "85",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Soda Base --
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

export default SodaBaseHeader;
