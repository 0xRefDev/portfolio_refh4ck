import photo from "@/assets/images/me.png";

export function AboutMe() {
  return (
    <>
      <article className="flex flex-col justify-center items-center w-full xsm:h-fit lg:h-[100dvh] pt-[6rem] 2xl:pt-[0rem] max-w-[1366px] mx-auto mb-8">
        <h1 className="xsm:w-[95%] lg:mt-0 text-white text-3xl lg:w-[60rem] text-left font-Jura uppercase font-semibold">
          Sobre mí
        </h1>
        <section className="xsm:w-[95%] xsm:flex-col relative flex lg:flex-row gap-6 lg:w-[60rem] p-6 bg-slate-900/85 mt-8 rounded-2xl shadow-xl">
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
              Mi camino en la programación comenzó en 2020, impulsado por la curiosidad
              de entender cómo funcionan las cosas y la motivación de crear soluciones
              propias. Desde entonces, he combinado el aprendizaje autodidacta con mi
              formación en Ingeniería Informática, desarrollando proyectos que abarcan
              desde aplicaciones de finanzas personales hasta herramientas y plataformas
              para comunidades de videojuegos.
              <br /> <br />
              Trabajo principalmente con tecnologías como React, TypeScript y Tailwind
              CSS, sin perder de vista el backend, las bases de datos y la integración de
              servicios necesarios para construir aplicaciones completas. Disfruto
              llevando una idea desde su concepción hasta su despliegue, cuidando tanto
              la experiencia de usuario como el funcionamiento interno del producto.
              <br /> <br />
              Me caracterizo por mi creatividad, persistencia y atención al detalle.
              Cuando surge un problema, busco comprender su causa raíz y abordarlo de
              forma estructurada, priorizando soluciones que tengan sentido y aporten
              valor real.
              <br /> <br />
              Mi objetivo es seguir creciendo profesionalmente, colaborar con equipos
              que valoren la calidad del software y contribuir a crear productos útiles,
              bien diseñados y preparados para evolucionar.
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
