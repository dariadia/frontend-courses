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
          content={t('meta_description')}
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
        <a target="_blank" href={i18n.resolvedLanguage === 'en' ? "https://dariadia-portfolio.vercel.app/" : "https://dariadia-portfolio-ru.vercel.app/"} rel="noreferrer">{t('portfolio')}</a>
      </footer>
    </>
  )
}

const ReactCourse = () => {
  const { t } = useTranslation()
  return (<section className="course-section"><h3>React</h3>
    <h4>{t('react_base')}</h4>
    <ol>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <li key={item}>
      <details>
        <summary>{t(`react_base_${item}`)}</summary>
        <div>{t(`react_base_${item}_details`)}</div>
      </details>

    </li>)}</ol>

    <h4>{t('react_adv')}</h4>
    WIP
    {/* <ol>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <li key={item}>
      <details>
        <summary>{t(`react_adv_${item}`)}</summary>
        <div>{t(`react_adv_${item}_details`)}</div>
      </details>
    </li>)}
    </ol> */}
  </section>)
}

const JsCourse = () => {
  return (<section><h3>JavaScript</h3></section>)
}


export default App
