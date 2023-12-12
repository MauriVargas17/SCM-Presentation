export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Segundo Proyecto</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Grupo New CP</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            Desarrollo del Sistema de Administración de la Cadena de Suministros
            (SCM) para la Gestión de Ventas y Logística de la Embotelladora
            “Cameo”
            <br />
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
