import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"

function App() {
  const { t, i18n } = useTranslation()
  const changeLanguage = () =>
    i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ru' : 'en')
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content=""
        />
        <title>{t('meta_title')}</title>
        <link rel="canonical" href="todo" />
      </Helmet>
      <header>
        <button onClick={changeLanguage}>{i18n.resolvedLanguage}</button>
      </header>
      <main></main>
      <footer>
        <a href="https://github.com/dariadia/">Github @dariadia</a>
        <a href="https://t.me/redheadalert">Telegram</a>
        <a target="_blank" href={i18n.resolvedLanguage === 'en' ? "https://dariadia-portfolio.vercel.app/":"https://dariadia-portfolio-ru.vercel.app/"} rel="noreferrer">{t('portfolio')}</a>
      </footer>
    </>
  )
}

export default App
