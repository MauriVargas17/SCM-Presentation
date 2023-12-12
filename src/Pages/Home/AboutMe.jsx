import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/cubitas.png" alt="Cubitas" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Fase de Inicio</p>
          <h1 className="skills-section--heading">Alcances</h1>
          <div className="skills--section--container">
            {data?.alcances?.map((item, index) => (
              <div key={index} className="alcances--section--card">
                <div className="skills--section--card--content">
                  <p className="skills--section--description">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <h1 className="skills-section--heading">Límites</h1>
          <div className="skills--section--container">
            {data?.limites?.map((item, index) => (
              <div key={index} className="limites--section--card">
                <div className="skills--section--card--content">
                  <p className="skills--section--description">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          className="btn btn-github"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1uzCGamAsU6wxUfN4xUTyt3d1QJa4gDCw/edit"
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
          TDRs
        </button>
        <div>
          <p> ================= </p>
        </div>
        <button
          className="btn btn-github"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1RnFLzBOVjU3DsFhXniEWb2S_WrXT2en1g2Jlc8gOAjo/edit"
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
          Carta
        </button>
        <div>
          <p> ================= </p>
        </div>
      </div>
    </section>
  );
}
