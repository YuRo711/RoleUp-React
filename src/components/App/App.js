import Header from '../Header/Header';
import { LanguageContext } from "../../contexts/LanguageContext";
import './App.css';
import { useState } from 'react';
import { texts } from '../../utils/texts';
import { images } from '../../utils/gallery';
import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Footer from '../Footer/Footer';
import Games from '../Pages/Games/Games';
import { dndCards, gameCards, nearestGames } from "../../utils/gameCards";
import Events from '../Pages/Events/Events';

function App() {
  const [lang, setLang] = useState("ru");

  return (
    <div className="page">
      <LanguageContext.Provider value={{lang, setLang}}>
        <Header
          texts={texts[lang].header}
        />
        <Routes>
          <Route path='/games' element={
            <Games
              texts={texts[lang].games}
              cards={gameCards[lang]}
            />}
          />
          <Route path='/events' element={
            <Events
              texts={texts[lang].events}
              cardTexts={texts[lang].games}
              gameCards={gameCards[lang]}
              events={nearestGames}
              lang={lang}
            />}
          />
          <Route path='/dnd' element={
            <Games
              texts={texts[lang].dnd}
              cards={dndCards[lang]}
            />}
          />
          <Route path='/prices' element={
            <p className='page__pending'>{texts[lang].pending}</p>
            }
          />
          <Route path='/' element={
            <Main
              texts={texts[lang].main}
              images={images}
            />}
          />
        </Routes>
      </LanguageContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
