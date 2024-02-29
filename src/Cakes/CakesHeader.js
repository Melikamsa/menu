import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function CakesHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Pancake",
      img: "https://internimenu.ir/wp-content/uploads/2023/10/IMG_20231009_121041_483-1024x1024.jpg",
      description:
        " پنکیک متوسط به همراه نوتلا سس پنکیک موز توت فرنگی بلوبری رزبری",
      price: "220",
    },
    {
      title: "Coffee and walnut cheesecake",
      img: "https://internimenu.ir/wp-content/uploads/2024/01/IMG_20240111_103346_853.jpg",
      description: "چیز کیک قهوه و گردو",
      price: "180",
    },
    {
      title: "Waffel",
      img: "https://internimenu.ir/wp-content/uploads/2023/10/IMG_20231009_121041_888-1024x1024.jpg",
      description:
        "وافل مستطیلی به همراه سس مخصوص اینترنی نوتلا توت فرنگی موز شکلات نوتلا رزبری بلوبری",
      price: "250",
    },
    {
      title: "Pistachio and orange spring tart",
      img: "https://internimenu.ir/wp-content/uploads/2024/01/IMG_20240111_103558_397.jpg",
      description: "تارت پسته و بهار نارنج",
      price: "200",
    },
    {
      title: "Antrum hot chocolate",
      img: "https://internimenu.ir/wp-content/uploads/2024/01/IMG_20240111_103401_527.jpg",
      description: "آنترومه هات چاکلت",
      price: "200",
    },
    {
      title: "Antrum Benafi banana",
      img: "https://internimenu.ir/wp-content/uploads/2024/01/IMG_20240111_103403_574.jpg",
      description: "آنترومه بنافی موز",
      price: "180",
    },
    {
      title: "Antrum chocolate berry",
      img: "https://internimenu.ir/wp-content/uploads/2024/01/IMG_20240111_103234_660.jpg",
      description: "آنترومه چاکلت بری",
      price: "180",
    },
    {
      title: "Carret cake",
      img: "https://internimenu.ir/wp-content/uploads/2024/01/IMG_20240111_103311_842.jpg",
      description: "کیک هویج کارامل گردویی",
      price: "150",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Cakes --
      </p>

      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:w-[fixd]">
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

export default CakesHeader;
