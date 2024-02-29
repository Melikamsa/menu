

function HeaderNav({ name }) {
  return (
    <>
      <section className="bg-[lightcoral] w-[100%] py-[10px]">
        <p className="bg-[mistyrose] mx-[auto] text-center w-[90px] h-[100px] py-[35px] rounded sm:w-[150px] xl:text-[20px] xl:py-[30px]">{name}</p>
      </section>
    </>
  );
}

export default HeaderNav;
