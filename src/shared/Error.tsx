import "./Error.scss";

export default function ErrorPage({ errorNumber, text }: {errorNumber:number, text: string }) {
  return (
    <section id="error404" className="container-fluid">
      <div className="text">
        <h1>¡ERROR {errorNumber}!</h1>
        <p>{text}</p>
      </div>

      <aside>
      <i className="bi bi-exclamation-octagon"></i>
      </aside>

    </section>
  );
}
