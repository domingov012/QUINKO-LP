import bg_elipse from "../assets/svg_nav.svg";

export default function Navbar({ about_ref, collab_ref, cotiza_ref }) {
  const refs = {
    about: about_ref,
    collab: collab_ref,
    cotiza: cotiza_ref,
  };

  function scrollTo(refKey) {
    refs[refKey].current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative">
      <img src={bg_elipse} className=" absolute right-0 top-0" />

      <nav className="text-white px-10 text-xl">
        <div className="flex h-full">
          <img src="./logo_4.png" alt="logo" className="h-full" />
        </div>
        <div className="flex gap-10 z-10">
          <div
            className="nav-button  anaheim-primary"
            onClick={() => scrollTo("about")}
          >
            Sobre Nosotros
          </div>
          <div
            className="nav-button  anaheim-primary"
            onClick={() => scrollTo("collab")}
          >
            Colaboradores
          </div>
          <div
            className="nav-button  anaheim-primary"
            onClick={() => scrollTo("cotiza")}
          >
            Cotiza Ahora
          </div>
        </div>
      </nav>
    </div>
  );
}
