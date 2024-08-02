import "./Games.css";

export default function Games(props) {
  const { texts, cards } = props;
  console.log(cards);

  return (
    <main className="games">
      <h1 className="main__title">{texts.title}</h1>
      <div className="games__cards">
        {
          cards.map((card, i) => 
            <div className="games__card"
              key={`card-${i}`}
            >
              <img className="games__image"
                src={card.image}
              />
              <div className="games__card-text">
                <h2 className="games__card-title">{card.title}</h2>
                <p className="games__description">{card.text}</p>
              </div>
              <button className="games__button">
                {texts.button}
              </button>
            </div>
          )
        }
      </div>
    </main>
  );
}