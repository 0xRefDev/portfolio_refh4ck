import photo from "@/assets/images/me.png";

export function AboutMe() {
  return (
    <>
      <article className="flex flex-col justify-center items-center w-full xsm:h-fit lg:h-[100dvh] pt-[4rem] 2xl:pt-[0rem] max-w-[1366px] mx-auto mb-8">
        <h1 className="xsm:w-[95%] lg:mt-0 text-white text-3xl lg:w-[60rem] text-left font-Jura uppercase font-semibold">
          Sobre mí
        </h1>
        <section className="xsm:w-[95%] xsm:flex-col relative flex lg:flex-row gap-6 lg:w-[60rem] p-6 bg-slate-900/85 mt-4 rounded-2xl shadow-xl">
          <img
            src={photo}
            className="w-[20rem] xsm:self-center "
            alt="Andres Hernadez Foto"
          />
          <div className="flex flex-col gap-4">
            <p className="pt-4 w-full text-pretty text-white/60 font-sans font-light">
              Mi nombre es{" "}
              <strong className="text-white/75">Andrés Hernández</strong>, desarrollador
              full-stack con especial interés en el frontend y en la creación de
              experiencias web funcionales, intuitivas y cuidadas al detalle.
              <br /> <br />
              Desde 2020, mi curiosidad por la tecnología me ha llevado a aprender
              constantemente y desarrollar proyectos propios, combinando el aprendizaje
              autodidacta con mi formación en Ingeniería Informática. Disfruto
              transformando ideas en productos reales, desde su diseño hasta su
              despliegue, trabajando tanto en el frontend como en el backend.
              <br /> <br />
              Me considero una persona creativa, persistente y analítica, con especial
              atención al detalle. Me gusta comprender los problemas desde su raíz y
              encontrar soluciones que aporten valor real a los usuarios. Mi objetivo es
              seguir creciendo profesionalmente y contribuir a construir productos útiles
              y bien diseñados junto a grandes equipos de desarrollo.
            </p>
            <div className="flex gap-4 xsm:justify-center lg:justify-start">
              <a
                href="mailto:refh4ck.dev@gmail.com"
                className="flex justify-center items-center p-2 rounded-full text-white/80 outline outline-[#0acf8395] text-sm bg-white/5 text-center shadow-[#0acf8325] shadow-lg hover:bg-white/20 transition-colors"
              >
                Disponible para trabajar
              </a>
              <a
                href="https://drive.google.com/file/d/1t3A7LfCBk2wIeY0_G7whn45pL5lhjbi9/view?usp=drive_link"
                target="_blank"
                className="p-2 w-24 flex justify-center items-center rounded-full text-white/80 outline outline-[#0acf8395] text-sm bg-white/5 text-center shadow-[#0acf8325] shadow-lg hover:bg-white/20 transition-colors"
              >
                CV
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
