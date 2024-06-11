export default function MainTitle({ cotiza_ref }) {
  return (
    <div className="main-title flex w-full h-full">
      <div className="text-white flex flex-col items-center justify-center text-xl m-auto">
        <img src="./logo_1.png" alt="logo" className="h-full" />
        <div
          className="button-1 w-fit anaheim-primary"
          onClick={() =>
            cotiza_ref.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Cotiza Ahora
        </div>
      </div>
    </div>
  );
}
