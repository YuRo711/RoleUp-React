import Header from '../Header/Header';
import { LanguageContext } from "../../contexts/LanguageContext";
import './App.css';
import { useState } from 'react';
import { texts } from '../../utils/texts';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  const [lang, setLang] = useState("ru");

  return (
    <div className="page">
      <LanguageContext.Provider value={{lang, setLang}}>
        <Header
          texts={texts[lang].header}
        />
        <Routes>
          <Route path='/' element={
            <Main
              texts={texts[lang].main}
            />
          }
          />
        </Routes>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
