import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function SaladHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Interni salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9190.jpg",
      description:
        "کاهو لیتل جم، استیک گوساله، سس سرکه،سس لیمو، میوه های فصل، آجیل",
      price: "470",
    },
    {
      title: "Cesar salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Cesar-salad-192.jpg",
      description: "مرغ گریل، کاهو رسمی، سس سزار، کروتان، پنیر پارمسان",
      price: "370",
    },
    {
      title: " Fattosh salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9216.jpg",
      description: "ترب، نعنا، نان پیتا، خیار، گوجه",
      price: "270",
    },
    {
      title: "Greek salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9196.jpg",
      description: "گوجه، خیار، پیاز، زیتون، کاپاریس، گوجه، پنیر فتا",
      price: "270",
    },
    {
      title: "Green salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9193.jpg",
      description:
        "روکولا، سوئیس چارد، بیبی اسفناج، انار، سیب سبز، گلابی، زیتون، خیار، سس گرین",
      price: "300",
    },
    {
      title: "Quinoa Greek salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9171.jpg",
      description: "کینوا، بروکلی، خیار، گوجه، انار، نعنا، ذرت، پنیر فتا",
      price: "300",
    },
    {
      title: " Avocado Greek chicken salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Avocado-greek-chicken-salad-245.jpg",
      description:
        "کاهو رسمی، کاهو فرانسوی، میکس سبز، آواکادو، خیار، گوجه، پنیر فتا، مرغ گریل، زیتون، سس تیزازکی",
      price: "470",
    },
    {
      title: "Mix sea food salad",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Mix-sea-food-salad-440.jpg",
      description: "سلمون خام دودی، گریل میگو، گریل سالمون",
      price: "920",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Salad --
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

export default SaladHeader;
