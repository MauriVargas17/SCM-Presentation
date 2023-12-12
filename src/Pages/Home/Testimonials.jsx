import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Diseño y Desarrollo</p>
          <h2 className="sections--heading">Análisis BPWin</h2>
        </div>
      </div>
      <div className="about--section--img">
        <img src="./img/nivel0.png" alt="BPWin" />
      </div>
      <div className="about--section--img">
        <img src="./img/nivel1.png" alt="BPWin" />
      </div>
      <div className="about--section--img">
        <img src="./img/nivel20.png" alt="BPWin" />
      </div>
      <div className="about--section--img">
        <img src="./img/nivel21.png" alt="BPWin" />
      </div>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Diseño y Desarrollo</p>
          <h2 className="sections--heading">Requerimientos</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.requerimientos?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review"></div>
            <h3>{item.Código}</h3>
            <p className="text-md">{item.Nombre}</p>
            <p className="text-md">{item.Descripción}</p>
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.Entrada}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.Proceso}
                </p>
                <p className="text-md testimonial--author--name">
                  {item.Salida}
                </p>
                <img src={item.imagen} alt="Placeholder"></img>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Diseño y Desarrollo</p>
          <h2 className="sections--heading">Diagramas UML</h2>
        </div>
        {data?.uml?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review"></div>
            <h3>{item.title}</h3>

            <div className="testimonial--section--card--author--detail">
              <div>
                <img src={item.src} alt="Placeholder"></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Diseño y Desarrollo</p>
          <h2 className="sections--heading">Diagrama C4</h2>
        </div>
        <p
          className="portfolio--link"
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1J7P7iYKqtObzo1z87Fuw5ZOjhM7Kq7jd"
            )
          }
        >
          Abrir Diagrama
        </p>
      </div>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Diseño y Desarrollo</p>
          <h2>Herramientas y Metodologías</h2>
        </div>
        <button
          className="btn btn-github"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1Cv8AwzCn7uJbiNLcxqda4fzTg-BRLRx2jztkfqRybAY/edit"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 2H6C4.34315 2 3 3.34315 3 5V27C3 28.6569 4.34315 30 6 30H26C27.6569 30 29 28.6569 29 27V9L20 2ZM6 1C3.23858 1 1 3.23858 1 6V27C1 29.7614 3.23858 32 6 32H26C28.7614 32 31 29.7614 31 27V5C31 2.23858 28.7614 0 26 0H12.4142C12.1504 0 11.8996 0.105357 11.7071 0.292893L1.70711 10.2929C1.31658 10.6834 1.31658 11.3166 1.70711 11.7071C2.09763 12.0976 2.7308 12.0976 3.12132 11.7071L11 3.82843L18.8787 11.7071C19.2692 12.0976 19.9024 12.0976 20.2929 11.7071C20.6834 11.3166 20.6834 10.6834 20.2929 10.2929L12.2929 2.29289C12.1054 2.10536 11.8546 2 11.5858 2H6ZM7 17H25V19H7V17ZM7 22H21V24H7V22ZM7 27H23V29H7V27Z"
              fill="currentColor"
            />
          </svg>
          Doc
        </button>
      </div>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Diseño y Desarrollo</p>
          <h2>Diseño de pantallas</h2>
        </div>
        <button
          className="btn btn-github"
          onClick={() =>
            window.open(
              "https://app.moqups.com/X5B4K17hxjdLuwhePmhKpb68jMGyFDLL/view/page/a2a00afc0"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 2H6C4.34315 2 3 3.34315 3 5V27C3 28.6569 4.34315 30 6 30H26C27.6569 30 29 28.6569 29 27V9L20 2ZM6 1C3.23858 1 1 3.23858 1 6V27C1 29.7614 3.23858 32 6 32H26C28.7614 32 31 29.7614 31 27V5C31 2.23858 28.7614 0 26 0H12.4142C12.1504 0 11.8996 0.105357 11.7071 0.292893L1.70711 10.2929C1.31658 10.6834 1.31658 11.3166 1.70711 11.7071C2.09763 12.0976 2.7308 12.0976 3.12132 11.7071L11 3.82843L18.8787 11.7071C19.2692 12.0976 19.9024 12.0976 20.2929 11.7071C20.6834 11.3166 20.6834 10.6834 20.2929 10.2929L12.2929 2.29289C12.1054 2.10536 11.8546 2 11.5858 2H6ZM7 17H25V19H7V17ZM7 22H21V24H7V22ZM7 27H23V29H7V27Z"
              fill="currentColor"
            />
          </svg>
          Cliente
        </button>
        <button
          className="btn btn-github"
          onClick={() =>
            window.open(
              "https://app.moqups.com/QsZafUe1OrcdKsb7IPQ6mFRfgu62831x/view/page/a3fbc0074"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 2H6C4.34315 2 3 3.34315 3 5V27C3 28.6569 4.34315 30 6 30H26C27.6569 30 29 28.6569 29 27V9L20 2ZM6 1C3.23858 1 1 3.23858 1 6V27C1 29.7614 3.23858 32 6 32H26C28.7614 32 31 29.7614 31 27V5C31 2.23858 28.7614 0 26 0H12.4142C12.1504 0 11.8996 0.105357 11.7071 0.292893L1.70711 10.2929C1.31658 10.6834 1.31658 11.3166 1.70711 11.7071C2.09763 12.0976 2.7308 12.0976 3.12132 11.7071L11 3.82843L18.8787 11.7071C19.2692 12.0976 19.9024 12.0976 20.2929 11.7071C20.6834 11.3166 20.6834 10.6834 20.2929 10.2929L12.2929 2.29289C12.1054 2.10536 11.8546 2 11.5858 2H6ZM7 17H25V19H7V17ZM7 22H21V24H7V22ZM7 27H23V29H7V27Z"
              fill="currentColor"
            />
          </svg>
          Admin
        </button>
      </div>
    </section>
  );
}
