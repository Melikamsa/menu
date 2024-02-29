import { useState } from "react";
import BreakFastBox from "../BreakFast/BreakFastBox.js";

function MocktailsHeader() {
  const [ProductList, setProductList] = useState([
    {
      title: "Surprise",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9194.jpg",
      description: "سوپرایز",
      price: "180",
    },
    {
      title: "Shinamon",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9197.jpg",
      description: "آب پرتقال، آب آناناس، دارچین، لیمو، چای ترش",
      price: "150",
    },
    {
      title: "Sea colado",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Sea-colado.jpg",
      description:
        "آب آناناس، شیر نارگیل سیروپ بلو کاراسائو ، آلوورا ، آب نارگیل ، ",
      price: "160",
    },
    {
      title: "Dan_g",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Dang.jpg",
      description:
        "سیروپ، کرنبری، توت فرنگی ، آب پرتقال، آب لیمو ، ریحان ایتالیایی ، میوه کاکتوس",
      price: "145",
    },
    {
      title: "Basil mojito",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Simple-lemonade.jpg",
      description: "ریحان ایتالیایی، عسل، نعنا، آب لیمو، سودا",
      price: "130",
    },
    {
      title: "Feel the light",
      img: "https://internimenu.ir/wp-content/uploads/2023/02/IMG_9205.jpg",
      description:
        "آلوورا ، سیروپ پشن فروت، آب پرتقال سیروپ لایم، آب لیمو، نمک ، پوره توت فرنگی ، ",
      price: "140",
    },
    {
      title: "Santorini",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Santorini.jpg",
      description:
        "آب هندوانه، سیروپ پشن فروت، نعنا ،آب لیمو، پوره توت فرنگی، پرتقال",
      price: "155",
    },
    {
      title: "Fresh seasonal juice",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Fresh-seasonal-juice.jpg",
      description: "آب میوه های طبیعی فصل",
      price: "140",
    },
    {
      title: "mojito",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Basil-mojito.jpg",
      description: "نعنا، شکر قهوه ای، آب لیمو، سودا",
      price: "125",
    },
    {
      title: "Simple limonade",
      img: "https://internimenu.ir/wp-content/uploads/2023/01/Feel-the-light-1.jpg",
      description: "لیموناد",
      price: "120",
    },
  ]);

  return (
    <>
      <p
        className="text-[indianred] text-center uppercase
      font-semibold text-[18px] my-[20px] xl:text-[20px]"
      >
        -- Mocktails --
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

export default MocktailsHeader;
