export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <img src="./img/qa.png" alt="QA"></img>
      <div>
        <p className="sub--title">
          Fase de Control de Calidad e Implementación
        </p>
        <h2>Pruebas de Control de Calidad</h2>
        <p
          className="text-lg"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1-1addwDaSmVvPjmvD433BDYMT-v8H98c_xg-Vc7IlG0/edit"
            )
          }
        >
          Revisar el Documento
        </p>
      </div>
      <div>
        <p className="sub--title">
          Fase de Control de Calidad e Implementación
        </p>
        <h2>Selección de Servidor</h2>
        <p
          className="text-lg"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/1TfrgyoHBLjTnmVpKE7FUsB1iKdpOGWBctDcAVTDc4aQ/edit"
            )
          }
        >
          Revisar el Documento
        </p>
      </div>

      {/* <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form> */}
    </section>
  );
}
