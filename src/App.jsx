import { Main } from "./components/Main"
import { AboutSection } from "./components/AboutSection"
import { Description } from "./components/Description"
import { Footer } from "./components/Footer"
import { useScrollEffects } from "./hooks/useScrollEffects"

function App() {
  useScrollEffects()

  return (
    <>
      <Main />
      <AboutSection />
      <Description />
      <Footer />
    </>
  )
}

export default App
