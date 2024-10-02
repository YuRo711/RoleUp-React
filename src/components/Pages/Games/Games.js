import GameCard from "../../GameCard/GameCard";
import "./Games.css";

export default function Games(props) {
  const { texts, cards } = props;

  return (
    <main className="games">
      <h1 className="main__title">{texts.title}</h1>
      <div className="games__cards">
        {
          cards.map((card, i) => 
            <GameCard
              key={`card-${i}`}
              card={card}
              texts={texts}
            />
          )
        }
      </div>
    </main>
  );
}