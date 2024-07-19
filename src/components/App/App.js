import Header from '../Header/Header';
import { LanguageContext } from "../../contexts/LanguageContext";
import './App.css';
import { useState } from 'react';
import { texts } from '../../utils/texts';

function App() {
  const [lang, setLang] = useState("ru");

  return (
    <div className="page">
      <LanguageContext.Provider value={{lang, setLang}}>
        <Header
          texts={texts[lang].header}
        />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
