import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function MilkShakeHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Classic milkshake",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9204.jpg",
      description: "بستنی وانیل، شیر",
      price: "150",
    },
    {
      title: "Black forest",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Black-forest.jpg",
      description: "پودر هات چاکلت ، سیروپ شکلات ، بستنی وانیل ، مربا آلبالو",
      price: "155",
    },
    {
      title: "Nutella milkshake",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Nutella-milkshake.jpg",
      description:
        "بستنی وانیل، نوتلا",
      price: "160",
    },
    {
      title: "Creamy biscuit",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Creamy-biscuit.jpg",
      description:
        "نوتلا ، پودر بیسکوئیت کرم بیسکوئیت، شیر، بستنی، ",
      price: "165",
    },

  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Milk Shake --
      </p>

      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">  {ProductList.map((item) => {
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

export default MilkShakeHeader;
