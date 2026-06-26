import { renderToString } from 'react-dom/server'
import { Main } from './components/Main'
import { AboutSection } from './components/AboutSection'
import { Description } from './components/Description'
import { Footer } from './components/Footer'

export async function prerender() {
  const html = renderToString(
    <>
      <Main />
      <AboutSection />
      <Description />
      <Footer />
    </>
  )
  return { html }
}
