import repeat from "../../images/repeat.png"

export default function GameCard(props) {
  const {texts, card, eventLink} = props;

  return (
    <div className="games__card">
      <img className="games__image"
        src={card.image}
      />
      <div className="games__card-text">
        <h2 className="games__card-title">{card.title}</h2>
        <p className="games__description">{card.text}</p>
      </div>
      {eventLink ? 
        <a className="games__button" href={eventLink}>
          {texts.register}
        </a>
        : ""
        // <button className="games__button">
        //   {texts.button}
        // </button>
      }
      {
        card.repeat ?
        <div className="games__repeat">
          <img className="games__repeat-image"
            src={repeat}
          />
          <p className="games__repeat-text">{texts.repeat}</p>
        </div>
        : ""
      }
    </div>
  );
}