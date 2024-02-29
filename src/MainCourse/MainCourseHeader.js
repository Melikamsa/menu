import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function MainCourseHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Filet steak",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Filet-steak-450.jpg",
      description: " گوساله پوره سیب زمینی، سبزیجات، سس قارچ ",
      price: "870",
    },
    {
      title: "Lamb rice bowl ",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Lamb-rice-bowl-390.jpg",
      description: " لم چاپس، برنج دودی، سبزیجات",
      price: "870",
    },
    {
      title: "Short ribs with mashed potato",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Short-ribs-with-mashed-potato-460.jpg",
      description:
        "دنده اسلوکوک گوساله، پوره سیب زمینی، پیاز کاراملی با سس باربیکیو، سبزیجات",
      price: "835",
    },
    {
      title: " Shish kebab tzatziki",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Shish-kebab-tzatziki-370.jpg",
      description: "فیله گوسفندی، برنج دودی، سبزیجات ، سس تیزاتزکی",
      price: "835",
    },
    {
      title: "Saute salmon with tarragon sauce",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Saute-salmon-with-tarragon-sauce.jpg",
      description: "سلمون نروژی، پوره سیب زمینی، سبزیجات، سس چیمیچوری",
      price: "1020",
    },
    {
      title: " Mix food plater (4p)",
      // img: "Mix food plater",
      description:
        "لم چاپس، چیکن سولاکی، چیکن استیک، فیله استیک، شیش کباب، میگو، برنج‌، سبزیجات",
      price: "3740",
    },
    {
      title: " Chicken souvlaki kebab",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Chicken-souvlaki-kebab-280.jpg",
      description: "برنج، سبزیجات، سینه مرغ، سس تیزاتزکی",
      price: "510",
    },
    {
      title: " Grill chicken steak",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9198.jpg",
      description: "سینه مرغ گریل ، پوره سیب زمینی، سبزیجات،سس چیمیچوری ",
      price: "485",
    },
    {
      title: " Stuffed chicken",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Stuffed-chicken-345.jpg",
      description:
        "سینه مرغ پر شده از اسفناج و قارچ همراه با سبزیجات و پوره سیب زمینی",
      price: "480",
    },
    {
      title: " Fried chicken fillet",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9219.jpg",
      description: "فیله مرغ سرخ شده، پوره سیب زمینی، سبزیجات، سس مخصوص",
      price: "460",
    },
    {
      title: " Alferedo pasta",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Alferedo-pasta-270.jpg",
      description: "پاستا پنه، سس قارچ، مرغ ، پارمسان",
      price: "420",
    },
    {
      title: "Spicy arrabbiata steak pasta",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Spicy-arrabbiata-steak-pasta-320.jpg",
      description: "پاستا فتوچینی، سس ، استیک ، پارمسان",
      price: "530",
    },
    {
      title: " Pistachio pesto pasta (vegetarian)",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Pistachio-pesto-pasta-vegetarian-270.jpg",
      description: "پاستا پنه، سس پستو، گوجه، زیتون، پارمسان",
      price: "375",
    },
    {
      title: " Cilantro infused shrimp",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Cilantro-infused-shrimp-480.jpg",
      description: "میگو‌ تفت داده شده در کره، برنج دودی، سبزیجات، سس چیمیچوری",
      price: "920",
    },
    {
      title: "Vegetable platter",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Vegetable-platter-170.jpg",
      description: "میکس سبزیجات، سس اویستر",
      price: "250",
    },
    {
        title: "Steak with rice ",
        img: "https://internimenu.ir/wp-content/uploads/2023/09/%DA%A9%D8%AA%D9%87-%D8%A7%D8%B3%D8%AA%DB%8C%DA%A9-683x1024.jpg",
        description: " استیک فیله گوساله به همراه کته ی ایرانی",
        price: "815",
      },
      {
        title: "Tepsi kebab with tomato sauce",
        img: "https://internimenu.ir/wp-content/uploads/2023/09/%D8%AA%D9%BE%D8%B3%DB%8C-%DA%A9%D8%A8%D8%A7%D8%A8-1024x683.jpg",
        description: "کباب دیگی به همراه سس گوجه",
        price: "540",
      },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Main Course --
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

export default MainCourseHeader;
