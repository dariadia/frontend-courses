import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        hello world
        <h1>{t('Welcome to React')}</h1>
      </header>
    </div>
  );
}

export default App
