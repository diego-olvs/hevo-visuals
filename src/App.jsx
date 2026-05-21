import React, { useEffect, useState } from "react";

const HERO_VIDEO = "/hero/hero-dj.mp4";

const sections = [
  {
    id: "eventos",
    number: "01",
    title: "EVENTOS SOCIALES",
    intro:
      "Cobertura de momentos reales, atmósfera y narrativa visual para eventos con energía propia.",
    projects: [
      {
        name: "TAMMY SAAVEDRA DJ EN IGNOTOMX",
        type: "DJ set / cobertura de evento",
        images: [
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/01_HERO_HORIZONTAL.jpg", layout: "wide" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/02_MOVIMIENTO_ROJO.jpg", layout: "vertical" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/03_DJ_BN_FRONTAL.jpg", layout: "vertical" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/04_DJ_BN_CABINA.jpg", layout: "vertical" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/05_LUZ_ROJA_DJ.jpg", layout: "vertical" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/06_BACKSTAGE_BN.jpg", layout: "wide", fit: "contain" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/07_AMBIENTE_ROJO.jpg", layout: "vertical" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/08_RETRATO_VERTICAL_DJ.jpg", layout: "vertical" },
          { src: "/eventos/01_TAMMY_SAAVEDRA_DJ_IGNOTOMX/09_LUZ_ESCENICA_BN.jpg", layout: "wide", fit: "contain" },
        ],
      },
      {
        name: "LUNNADILATICE DJ HACIENDA SUSULÁ",
        type: "DJ set / evento en hacienda",
        rawPost: {
          raw: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/RAW_VS_POST/01_RAW.jpg",
          post: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/RAW_VS_POST/02_POST.jpg",
          title: "RAW VS POST",
        },
        images: [
          { src: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/01_HERO_HORIZONTAL.jpg", layout: "wide" },
          { src: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/02_RETRATO_CABINA.jpg", layout: "vertical" },
          { src: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/03_CABINA_VERTICAL.jpg", layout: "vertical" },
          { src: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/05_PERFIL_DJ.jpg", layout: "vertical" },
          { src: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/06_CONCENTRACION.jpg", layout: "vertical" },
          { src: "/eventos/02_LUNNADILATICE_DJ_HACIENDA_SUSULA/04_SLOW_SHUTTER.jpg", layout: "wide", position: "center center" },
        ],
      },
      {
        name: "ANDROMEDA MANSION CLUB SOCIAL GATHERING",
        type: "Club social / gathering nocturno",
        images: [
          { src: "/eventos/03_ANDROMEDA_MANSION_CLUB_SOCIAL_GATHERING/01_HERO_HORIZONTAL.jpg", layout: "wide" },
          { src: "/eventos/03_ANDROMEDA_MANSION_CLUB_SOCIAL_GATHERING/02_MANOS_EN_CABINA.jpg", layout: "vertical" },
          { src: "/eventos/03_ANDROMEDA_MANSION_CLUB_SOCIAL_GATHERING/03_DJ_BOOTH.jpg", layout: "vertical" },
          { src: "/eventos/03_ANDROMEDA_MANSION_CLUB_SOCIAL_GATHERING/04_ENERGIA.jpg", layout: "wide", position: "center center" },
          { src: "/eventos/03_ANDROMEDA_MANSION_CLUB_SOCIAL_GATHERING/05_LUZ_AZUL.jpg", layout: "wide", position: "center center" },
        ],
      },
      {
        name: "CAMP ZEKE PENNSILVANIA",
        type: "Retreat / actividades sociales",
        note: "LAS IMÁGENES DE ESTE EVENTO NO TIENEN EDICIÓN",
        images: [
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/01_HERO_CLOSEUP_OJOS.jpg", layout: "wide", fit: "contain" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/02_TIROLESA.jpg", layout: "wide" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/03_ACTIVIDAD_GRUPAL.jpg", layout: "wide" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/04_CARTEL_NUEVA_YORK.jpg", layout: "wide" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/09_COCINA_STAFF.jpg", layout: "wide" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/11_FOGATA_LENA.jpg", layout: "vertical" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/13_ESCRITURA_CENITAL.jpg", layout: "wide" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/08_RETRATO_CAMP_STAFF.jpg", layout: "vertical" },
          { src: "/eventos/04_CAMP_ZEKE_PENNSILVANIA/15_RETRATO_STAFF.jpg", layout: "vertical" },
        ],
      },
    ],
  },
  {
    id: "retratos",
    number: "02",
    title: "RETRATOS",
    intro:
      "Dirección, gesto y presencia. Retratos con estética editorial y lectura humana.",
    projects: [
      {
        name: "REGINA",
        type: "Retrato editorial",
        rawPost: {
          raw: "/retratos/01_REGINA/RAW_VS_POST/01_RAW.jpg",
          post: "/retratos/01_REGINA/RAW_VS_POST/02_POST.jpg",
          title: "¿Una mala foto? No veo problema.",
        },
        images: [
          { src: "/retratos/01_REGINA/01_HERO_VERTICAL.jpg", layout: "verticalHero" },
          { src: "/retratos/01_REGINA/02_CLOSEUP_FRONTAL.jpg", layout: "vertical" },
          { src: "/retratos/01_REGINA/03_PERFIL.jpg", layout: "vertical" },
          { src: "/retratos/01_REGINA/04_DETALLE_EDITORIAL.jpg", layout: "vertical" },
          { src: "/retratos/01_REGINA/05_RAW_POST_FINAL.jpg", layout: "vertical" },
        ],
      },
      {
        name: "CESAR",
        type: "Retrato masculino editorial",
        images: [
          {
            src: "/retratos/02_CESAR/02_FRONTAL_INTENSO.jpg",
            layout: "wide",
            position: "center center",
          },
          {
            src: "/retratos/02_CESAR/01_HERO_VERTICAL.jpg",
            layout: "vertical",
            fit: "contain",
            position: "center center",
          },
          {
            src: "/retratos/02_CESAR/03_CROP_OJOS.jpg",
            layout: "vertical",
            fit: "contain",
            position: "center center",
          },
          {
            src: "/retratos/02_CESAR/05_DETALLE_MANOS.jpg",
            layout: "wide",
            fit: "contain",
            position: "center center",
          },
          {
            src: "/retratos/02_CESAR/04_SONRISA.jpg",
            layout: "verticalCentered",
            fit: "contain",
            position: "center center",
          },
        ],
      },
    ],
  },
  {
    id: "productos",
    number: "03",
    title: "PRODUCTOS",
    intro:
      "Luz, textura y composición para piezas comerciales con carácter visual.",
    projects: [
      {
        name: "SKINCARE ASIATICO",
        type: "Producto / beauty & skincare",
        rawPost: {
          raw: "/productos/01_SKINCARE_ASIATICO/RAW_VS_POST/01_RAW.jpg",
          post: "/productos/01_SKINCARE_ASIATICO/RAW_VS_POST/02_POST.jpg",
          title: "RAW VS POST",
        },
        images: [
          { src: "/productos/01_SKINCARE_ASIATICO/01_HERO_HORIZONTAL.jpg", layout: "wide" },
          { src: "/productos/01_SKINCARE_ASIATICO/02_SKINTIFIC.jpg", layout: "vertical" },
          { src: "/productos/01_SKINCARE_ASIATICO/03_PYUN_KANG_YUL.jpg", layout: "vertical" },
          { src: "/productos/01_SKINCARE_ASIATICO/04_CENTELLA_OIL.jpg", layout: "vertical" },
          { src: "/productos/01_SKINCARE_ASIATICO/05_CENTELLA_MASK.jpg", layout: "vertical" },
        ],
      },
    ],
  },
  {
    id: "comida",
    number: "04",
    title: "COMIDA",
    intro:
      "Color, textura y apetito visual en una categoría más casual y lifestyle.",
    projects: [
      {
        name: "COMIDA",
        type: "Food / lifestyle casual",
        images: [
          { src: "/comida/01_COMIDA/01_HERO_VERTICAL.jpg", layout: "verticalHero" },
          { src: "/comida/01_COMIDA/02_TACOS.jpg", layout: "vertical" },
          { src: "/comida/01_COMIDA/03_FRUTA_PICNIC.jpg", layout: "wide" },
        ],
      },
    ],
  },
];

const allImages = sections.flatMap((section) =>
  section.projects.flatMap((project) =>
    project.images.map((image) => ({
      src: image.src,
      project: project.name,
      type: project.type,
    }))
  )
);

function RawPostSlider({ raw, post, title }) {
  const [value, setValue] = useState(50);

  function updateSlider(clientX, element) {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    const clamped = Math.min(100, Math.max(35, percent));
    setValue(clamped);
  }

  function handlePointerDown(event) {
    updateSlider(event.clientX, event.currentTarget);

    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  }

  function handlePointerMove(event) {
    if (event.pointerType !== "touch" && event.buttons !== 1) return;
    updateSlider(event.clientX, event.currentTarget);
  }

  return (
    <div className="rawPost">
      <div className="rawPostText">
        <p>RAW VS POST</p>
        <h3>{title}</h3>
      </div>

      <div
        className="compare"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <div className="compareBase">
          <img src={raw} alt="RAW" draggable="false" />
        </div>

        <div className="compareEdited" style={{ width: `${value}%` }}>
          <img src={post} alt="POST" draggable="false" />
        </div>

        <div className="compareLine" style={{ left: `${value}%` }} />
        <div className="compareHandle" style={{ left: `calc(${value}% - 20px)` }}>
          ↔
        </div>
      </div>

      <div className="rawPostLabels">
        <span>POST</span>
        <span>RAW</span>
      </div>
    </div>
  );
}

function ProjectBlock({ project, onOpenImage }) {
  return (
    <article className="project">
      <div className="projectHeader">
        <p>{project.type}</p>
        <h3>{project.name}</h3>
      </div>

      {project.rawPost && (
        <RawPostSlider
          raw={project.rawPost.raw}
          post={project.rawPost.post}
          title={project.rawPost.title}
        />
      )}

      <div className="gallery">
        {project.images.map((image) => (
          <button
            type="button"
            className={`photo ${image.layout || "vertical"} ${
              image.fit === "contain" ? "contain" : ""
            }`}
            key={image.src}
            onClick={() => onOpenImage(image.src)}
            aria-label="Abrir imagen completa"
          >
            <img
              src={image.src}
              alt=""
              loading="eager"
              decoding="async"
              style={{ objectPosition: image.position || "center center" }}
            />
          </button>
        ))}
      </div>

      {project.note && <p className="projectNote">{project.note}</p>}
    </article>
  );
}

function Lightbox({ image, onClose, onNext, onPrev }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightboxClose" type="button" onClick={onClose}>
        ×
      </button>

      <button
        className="lightboxArrow lightboxPrev"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Imagen anterior"
      >
        ←
      </button>

      <img
        className="lightboxImage"
        src={image.src}
        alt=""
        onClick={(event) => event.stopPropagation()}
      />

      <button
        className="lightboxArrow lightboxNext"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Imagen siguiente"
      >
        →
      </button>

      <div className="lightboxMeta" onClick={(event) => event.stopPropagation()}>
        <p>{image.type}</p>
        <h3>{image.project}</h3>
      </div>
    </div>
  );
}

export default function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const activeImage =
    activeImageIndex === null ? null : allImages[activeImageIndex];

  function openImage(src) {
    const index = allImages.findIndex((image) => image.src === src);
    if (index !== -1) setActiveImageIndex(index);
  }

  function closeImage() {
    setActiveImageIndex(null);
  }

  function nextImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === null ? 0 : (currentIndex + 1) % allImages.length
    );
  }

  function prevImage() {
    setActiveImageIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : (currentIndex - 1 + allImages.length) % allImages.length
    );
  }

  return (
    <main>
      <div className="irisIntro">
        {[...Array(8)].map((_, index) => (
          <span key={index} style={{ transform: `rotate(${index * 45}deg)` }} />
        ))}
      </div>

      <section className="hero">
        <video src={HERO_VIDEO} autoPlay muted loop playsInline />
        <div className="heroOverlay" />

        <div className="heroText">
          <p>HEVO.VISUALS</p>
          <h1>Diego Olivares</h1>
          <h2>Dirección creativa y fotografía</h2>
        </div>

        <a className="scrollDown" href="#eventos" aria-label="Ir al contenido">
          ↓
        </a>
      </section>

      <section className="intro">
        <h2>Showcase visual para eventos, retratos y proyectos comerciales.</h2>
      </section>

      {sections.map((section) => (
        <section className="section" id={section.id} key={section.id}>
          <div className="sectionDivider">
            <span>{section.number}</span>
            <div />
          </div>

          <div className="sectionHeader">
            <div>
              <p>Proyecto / categoría</p>
              <h2>{section.title}</h2>
            </div>
            <span>{section.intro}</span>
          </div>

          {section.projects.map((project) => (
            <ProjectBlock
              project={project}
              key={project.name}
              onOpenImage={openImage}
            />
          ))}
        </section>
      ))}

      <footer>
        <div>
          <p>CONTACTO</p>
          <h2>Disponible para proyectos y colaboraciones.</h2>
        </div>

        <div className="contact">
          <a href="https://instagram.com/HEVO.VISUALS" target="_blank" rel="noreferrer">
            Instagram · @HEVO.VISUALS
          </a>
          <a href="https://wa.me/528331826824" target="_blank" rel="noreferrer">
            WhatsApp · +52 8331826824
          </a>
        </div>
      </footer>

      <Lightbox
        image={activeImage}
        onClose={closeImage}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: #000;
        }

        body {
          margin: 0;
          background: #000;
          color: white;
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
        }

        main {
          overflow-x: hidden;
          background: #000;
        }

        h1,
        h2,
        h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
        }

        .irisIntro {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #000;
          display: grid;
          place-items: center;
          pointer-events: none;
          animation: introFade 2.8s ease forwards;
        }

        .irisIntro span {
          position: absolute;
          width: 52vmin;
          height: 52vmin;
          background: #050505;
          clip-path: polygon(50% 50%, 100% 0, 100% 100%);
          transform-origin: 50% 50%;
          animation: irisOpen 2.1s ease forwards;
          border: 1px solid rgba(255,255,255,0.07);
        }

        @keyframes irisOpen {
          0% { scale: 1.4; opacity: 1; }
          80% { scale: 0.15; opacity: 1; }
          100% { scale: 0; opacity: 0; }
        }

        @keyframes introFade {
          0%, 75% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .hero video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1;
          filter: blur(0px) saturate(1.15) contrast(1.08) brightness(1.22);
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle, rgba(255,255,255,0.01), rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.76) 100%),
            rgba(0,0,0,0.02);
        }

        .heroText {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 24px;
        }

        .heroText p,
        .sectionHeader p,
        .projectHeader p,
        footer p,
        .rawPostText p,
        .lightboxMeta p {
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.68);
          font-weight: 700;
        }

        .heroText h1 {
          font-size: clamp(56px, 10vw, 150px);
          line-height: 0.9;
          font-style: italic;
          margin: 16px 0;
          text-shadow: 0 20px 80px rgba(0,0,0,0.85);
        }

        .heroText h2 {
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
          font-size: clamp(14px, 1.55vw, 20px);
          text-transform: uppercase;
          letter-spacing: 0.24em;
          color: rgba(255,255,255,0.9);
          font-weight: 700;
          text-shadow: 0 10px 50px rgba(0,0,0,0.9);
        }

        .scrollDown {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 34px;
          animation: bounce 1.8s infinite;
        }

        @keyframes bounce {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 8px; }
        }

        .intro {
          max-width: 1180px;
          margin: auto;
          padding: 120px 24px 30px;
        }

        .intro h2 {
          font-size: clamp(42px, 6vw, 92px);
          line-height: 0.95;
          font-style: italic;
          margin: 0;
        }

        .section {
          max-width: 1180px;
          margin: auto;
          padding: 110px 24px;
          position: relative;
        }

        .sectionDivider {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 20px;
          align-items: center;
          margin-bottom: 48px;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          padding: 0 24px;
        }

        .sectionDivider span {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          letter-spacing: 0.35em;
          font-weight: 700;
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
        }

        .sectionDivider div {
          height: 1px;
          background: rgba(255,255,255,0.1);
        }

        .sectionHeader {
          margin-bottom: 84px;
          display: grid;
          grid-template-columns: 1fr 0.72fr;
          gap: 40px;
          align-items: end;
        }

        .sectionHeader h2 {
          font-size: clamp(54px, 8vw, 116px);
          font-style: italic;
          margin: 0;
          line-height: 0.9;
        }

        .sectionHeader span {
          color: rgba(255,255,255,0.74);
          line-height: 1.75;
          font-size: 16px;
          font-weight: 600;
        }

        .project {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 56px 0 96px;
        }

        .projectHeader {
          margin-bottom: 34px;
          display: flex;
          justify-content: space-between;
          gap: 32px;
          align-items: end;
        }

        .projectHeader h3 {
          font-size: clamp(32px, 4vw, 58px);
          font-style: italic;
          margin: 0;
          line-height: 1;
          text-align: right;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
        }

        .photo {
          appearance: none;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0;
          cursor: zoom-in;
          overflow: hidden;
          border-radius: 24px;
          background: #000;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .photo.wide {
          grid-column: span 6;
          aspect-ratio: 16 / 9;
        }

        .photo.heroStrip {
          grid-column: span 6;
          aspect-ratio: 16 / 5;
        }

        .photo.verticalHero {
          grid-column: span 3;
          aspect-ratio: 4 / 5;
        }

        .photo.vertical {
          grid-column: span 3;
          aspect-ratio: 4 / 5;
        }

        .photo.verticalCentered {
          grid-column: 2 / span 4;
          aspect-ratio: 4 / 5;
        }

        .photo.detail {
          grid-column: span 2;
          aspect-ratio: 1 / 1;
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          image-rendering: auto;
          filter: none;
          transform: scale(1);
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          backface-visibility: hidden;
        }

        .photo.contain img {
          object-fit: contain;
          background: #000;
        }

        .photo:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 18px 60px rgba(0,0,0,0.55);
        }

        .photo:not(.contain):hover img {
          transform: scale(1.025);
        }

        .photo.contain:hover img {
          transform: scale(1);
        }

        .rawPost {
          margin: 40px 0 48px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.025);
          border-radius: 28px;
          overflow: hidden;
        }

        .rawPostText {
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .rawPostText h3 {
          font-size: clamp(28px, 4vw, 52px);
          font-style: italic;
          margin: 0;
          text-align: center;
        }

        .compare {
          position: relative;
          height: min(64vh, 620px);
          overflow: hidden;
          background: #000;
          touch-action: none;
          user-select: none;
          cursor: ew-resize;
        }

        .compareBase,
        .compareEdited {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .compareBase img,
        .compareEdited img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #000;
          padding: 18px;
          pointer-events: none;
          user-select: none;
        }

        .compareEdited {
          z-index: 2;
        }

        .compareLine {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.82);
          z-index: 3;
          pointer-events: none;
        }

        .compareHandle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.28);
          background: rgba(0,0,0,0.72);
          display: grid;
          place-items: center;
          z-index: 4;
          backdrop-filter: blur(8px);
          color: white;
          font-size: 16px;
          pointer-events: none;
          user-select: none;
        }

        .rawPostLabels {
          padding: 14px 22px;
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          letter-spacing: 0.32em;
          color: rgba(255,255,255,0.58);
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
          font-weight: 700;
        }

        .projectNote {
          margin: 26px 0 0;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.58);
          font-size: 11px;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          text-align: right;
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
          font-weight: 700;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          max-width: 1180px;
          margin: auto;
          padding: 90px 24px;
          display: flex;
          justify-content: space-between;
          gap: 32px;
        }

        footer h2 {
          font-size: clamp(32px, 4vw, 58px);
          font-style: italic;
          margin: 0;
        }

        .contact {
          display: flex;
          flex-direction: column;
          gap: 18px;
          justify-content: center;
        }

        .contact a {
          color: rgba(255,255,255,0.86);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 14px;
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
          font-weight: 700;
        }

        .contact a:hover {
          color: white;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(10px);
          display: grid;
          place-items: center;
          padding: 34px;
          animation: lightboxIn 0.22s ease forwards;
        }

        @keyframes lightboxIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightboxImage {
          max-width: 92vw;
          max-height: 86vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 18px;
          box-shadow: 0 30px 100px rgba(0,0,0,0.65);
        }

        .lightboxClose,
        .lightboxArrow {
          appearance: none;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(0,0,0,0.45);
          color: white;
          cursor: pointer;
          z-index: 10002;
          backdrop-filter: blur(12px);
          font-family: "Space Grotesk", "Helvetica Neue", Arial, sans-serif;
        }

        .lightboxClose {
          position: fixed;
          top: 22px;
          right: 22px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 30px;
          line-height: 1;
        }

        .lightboxArrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 72px;
          border-radius: 999px;
          font-size: 28px;
        }

        .lightboxPrev {
          left: 22px;
        }

        .lightboxNext {
          right: 22px;
        }

        .lightboxClose:hover,
        .lightboxArrow:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.36);
        }

        .lightboxMeta {
          position: fixed;
          left: 28px;
          bottom: 22px;
          max-width: min(520px, calc(100vw - 56px));
        }

        .lightboxMeta h3 {
          margin: 4px 0 0;
          font-size: clamp(24px, 3vw, 44px);
          font-style: italic;
        }

        @media (max-width: 820px) {
          .intro {
            padding: 90px 18px 20px;
          }

          .sectionHeader {
            grid-template-columns: 1fr;
          }

          footer {
            flex-direction: column;
          }

          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }

          .photo.wide,
          .photo.heroStrip,
          .photo.verticalHero,
          .photo.vertical,
          .photo.verticalCentered,
          .photo.detail {
            grid-column: span 2;
          }

          .photo.wide,
          .photo.heroStrip {
            aspect-ratio: 16 / 10;
          }

          .compare {
            height: min(62vh, 560px);
          }

          .compareBase img,
          .compareEdited img {
            padding: 10px;
          }

          .section {
            padding: 82px 18px;
          }

          .sectionDivider {
            padding: 0 18px;
          }

          .projectHeader {
            flex-direction: column;
            align-items: flex-start;
          }

          .projectHeader h3 {
            text-align: left;
          }

          .lightbox {
            padding: 16px;
          }

          .lightboxImage {
            max-width: 96vw;
            max-height: 78vh;
            border-radius: 12px;
          }

          .lightboxArrow {
            top: auto;
            bottom: 22px;
            transform: none;
            width: 46px;
            height: 46px;
            font-size: 22px;
          }

          .lightboxPrev {
            left: calc(50% - 58px);
          }

          .lightboxNext {
            right: calc(50% - 58px);
          }

          .lightboxMeta {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}