import './App.css'
import CategoriesGrid from './components/CategoriesGrid/CategoriesGrid'
import MainSlider from './components/MainSlider/MainSlider'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'

function App() {

  return (
    <>
      <NavBar />
      <MainSlider />
      <Section>
        <CategoriesGrid />
      </Section>
    </>
  )
}

export default App
