import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation()
  const changeLanguage = () => 
    i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ru' : 'en')
  return (
    <>
      <header>
        <button onClick={changeLanguage}>{i18n.resolvedLanguage}</button>
        <h1>{t('Welcome to React')}</h1>
      </header>
      <main></main>
      <footer>

      </footer>
    </>
  )
}

export default App
