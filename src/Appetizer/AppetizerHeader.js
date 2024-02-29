import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function AppetizerHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Chicken wings",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Chicken-wings-145.jpg",
      description: "کتف و بال مرغ سرخ شده، سس بوفالو",
      price: "285",
    },
    {
      title: "Muhammara",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9202.jpg",
      description: "فلفل کبابی، گردو، رب انار",
      price: "150",
    },
    {
      title: " Greek tzatziki",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9200.jpg",
      description: "ماست یونانی، خیار، روغن زیتون، شوید",
      price: "180",
    },
    {
      title: "Greek olives",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9189.jpg",
      description: "زیتون یونانی",
      price: "165",
    },
    {
      title: " Baba ghonoush",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9184.jpg",
      description: "بادمجان کبابی، گردو، رب انار، ماست",
      price: "190",
    },
    {
      title: "Hummus",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9188.jpg",
      description: "حمص",
      price: "220",
    },
    {
      title: " Hummus with steak",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Hummus-with-steak-210.jpg",
      description: "حمص، استیک گوساله",
      price: "320",
    },
    {
      title: "Mutabal",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9201-1.jpg",
      description: "بادمجان کبابی، ماست، روغن زیتون",
      price: "160",
    },
    {
      title: " Mixed appetizer platter",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9203.jpg",
      description:
        "حمص، متبل، باباغنوش، محمره، تیزاتزکی، زیتون یونانی، سیب زمینی سرخ شده، پیاز سوخاری",
      price: "690",
    },
    {
      title: "Greek bruschetta",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9185.jpg",
      description: "گوجه، زیتون، کاپاریس، ریحان، پنیر فتا، بالزامیک",
      price: "230",
    },
    {
      title: "Greek fried roll with chicken",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Greek-fried-roll-with-chicken-170.jpg",
      description: "رول سوخاری به همراه مرغ و سبزیجات با سس دیپ و تیزاتزکی",
      price: "240",
    },
    {
      title: "Beef slice steak fries parmesan",
      img: "https://internimenu.ir/wp-content/uploads/2023/09/%D8%A7%D8%B3%D8%AA%DB%8C%DA%A9-%D9%81%D8%B1%D8%A7%DB%8C%D8%B2-683x1024.jpg",
      description:
        "استیک گوساله تفت داده شده در سس مخصوص به همراه دیپ پیازچه و سس لویی",
      price: "290",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Appetizer --
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

export default AppetizerHeader;
