import "./Contacts.css";

export default function Contacts(props) {
  const { texts, contacts } = props;
  console.log(contacts);

  return (
    <main className="contacts">
      <h1 className="main__title">{texts.title}</h1>
      <div className="contacts__list">
        {
          contacts.map((entry) => (
            entry.contact ? 
              <p className="contacts__contact">
                <span className="contacts__name">{entry.title}: </span>
                {entry.contact}
              </p>
            :
              <p className="contacts__contact">
                <a className="contacts__contact" href={entry.link}>
                  <span className="contacts__name">{entry.title}</span>
                </a>
              </p>
          ))
        }
      </div>
    </main>
  );
}