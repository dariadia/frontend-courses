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
        {course === 'React' ? <ReactCourse setCourse={setCourse} /> : <JsCourse setCourse={setCourse} />}
      </main>
      <footer>
        <a target="_blank" href="https://github.com/dariadia/" rel="noreferrer">Github @dariadia</a>
        <a target="_blank" href="https://t.me/redheadalert" rel="noreferrer">Telegram</a>
        <a target="_blank" href={i18n.resolvedLanguage === 'en' ? "https://dariadia-portfolio.vercel.app/" : "https://dariadia-portfolio-ru.vercel.app/"} rel="noreferrer">{t('portfolio')}</a>
      </footer>
    </>
  )
}

const ReactCourse = ({ setCourse }) => {
  const { t } = useTranslation()
  return (<section className="course-section">
    <div className="flex-box">
      <h3>React</h3>
      <h3 onClick={() => setCourse('JavaScript')} className="disabled-tab">JavaScript</h3>
    </div>
    <h4>{t('base')}</h4>
    <ol>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <li key={item}>
      <details>
        <summary>{t(`react_base_${item}`)}</summary>
        <div>{t(`react_base_${item}_details`)}</div>
      </details>
    </li>)}
    </ol>

    <h4>{t('adv')}</h4>
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

const JsCourse = ({ setCourse }) => {
  const { t } = useTranslation()
  return (<section>
    <div className="flex-box">
      <h3>JavaScript</h3>
      <h3 onClick={() => setCourse('React')} className="disabled-tab">React.js</h3>
    </div>
    <ol>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => <li key={item}>
      <details>
        <summary>{t(`js_${item}`)}</summary>
        <div>{t(`js_${item}_details`)}</div>
      </details>
    </li>)}
    </ol>
  </section>
  )
}


export default App
