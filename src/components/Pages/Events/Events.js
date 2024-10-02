import "./Events.css";

export default function Events(props) {
  const { texts, cards } = props;
  
  return (
    <main className="events">
      <h1 className="main__title">{texts.title}</h1>

    </main>
  );
}