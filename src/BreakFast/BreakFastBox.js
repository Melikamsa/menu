function BreakFastBox({ title , img ,description, price }) {
  return (
    <>
      <section className="mb-[10px] rounded bg-gray h-[500px] w-[90%] m-[auto] text-right p-[10px] sm:text-[19px]">
        <h3 className="text-[lightcoral] font-semibold text-left">{title}</h3>

         <img className="w-[300px] h-[300px] rounded-xl my-[15px] mx-[auto]"alt="food" src={img}/>

        <p className="text-wite pt-[10px]"> {description} </p>

        <p className="text-wite pt-[10px] text-left">{price} t </p>
      </section>
    </>
  );
}

export default BreakFastBox;
