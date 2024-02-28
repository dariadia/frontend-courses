import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"
import { useState } from "react"

function App() {
  const { t, i18n } = useTranslation()
  const [course, setCourse] = useState('React')

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
      <main>
        <section>
          <h2>{t('what_you_get')}</h2>
          <p>{t('personalised')}</p>
        </section>
        {course === 'React' ? <ReactCourse /> : <JsCourse />}
      </main>
      <footer>
        <a target="_blank" href="https://github.com/dariadia/" rel="noreferrer">Github @dariadia</a>
        <a target="_blank" href="https://t.me/redheadalert" rel="noreferrer">Telegram</a>
        <a target="_blank" href={i18n.resolvedLanguage === 'en' ? "https://dariadia-portfolio.vercel.app/":"https://dariadia-portfolio-ru.vercel.app/"} rel="noreferrer">{t('portfolio')}</a>
      </footer>
    </>
  )
}

const ReactCourse = () => {
  return (<section><h3>React</h3></section>)
}

const JsCourse = () => {
  return (<section><h3>JavaScript</h3></section>)
}


export default App
