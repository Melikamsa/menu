import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function SandwichHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Interni burger",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Interni-burger-280.jpg",
      description: "برگر، پنیر گودا، سیب زمینی سرخ شده، سس هالندیز",
      price: "485",
    },
    {
      title: " Grill chicken burger",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9217.jpg",
      description: "مرغ گریل، سیب زمینی سرخ شده، سس لویی",
      price: "395",
    },
    {
      title: "pulled beef bbg sandwich",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/DSC00782.jpg",
      description: "گوشت گوساله اسلوکوک، پنیر موزارلا،سس باربیکیو، زیتون",
      price: "450",
    },
    {
      title: " Grill chicken with red pesto sandwich",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9214.jpg",
      description: "سینه مرغ گریل شده ، پنیر موزارلا ، پستو قرمز ، زیتون",
      price: "435",
    },
    {
      title: "Grill fillet steak",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Grill-fillet-steak-390.jpg",
      description: "فیله استیک گوساله، سس پستو، زیتون، پنیر موزارلا",
      price: "690",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Sandwich --
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

export default SandwichHeader;
