import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">Fase de Inicio</p>
        <h2 className="skills--section--heading">Análisis de Problemática</h2>
        <img src="./img/ishikawa.png" alt="Ishikawa"></img>
        <p className="hero--section-description">
          La carencia de un sistema informático centralizado ha generado
          dificultades en el seguimiento preciso de las ventas, control de
          inventarios, facturación y entregas de pedidos.
          <br /> La ausencia de automatización ha dado lugar a errores
          operativos, pérdida de datos y una respuesta menos ágil a las
          necesidades del cliente.
        </p>
      </div>
      <div>
        <p className="section--title">
          ¿Cómo podemos mejorar la administración de la cadena de suministros de
          gestión de ventas, control de inventarios, facturación y entregas de
          pedidos en la embotelladora "Cameo"?
        </p>
      </div>
      <div>
        <h3>Objetivo Principal</h3>
        <br />
        Diseñar un sistema informático de Administración de la Cadena de
        Suministros (SCM) para la Gestión de Ventas y Logística de la
        Embotelladora “Cameo”.
      </div>
      <div>
        <h3>Objetivos Específicos</h3>

        <div className="skills--section--container">
          {data?.obj_esp?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
