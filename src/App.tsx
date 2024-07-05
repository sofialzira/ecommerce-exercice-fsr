import './App.css'
//import CategoriesGrid from './components/CategoriesGrid/CategoriesGrid'
import MainSlider from './components/MainSlider/MainSlider'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'
import SectionTile from './components/SectionTitle/SectionTitle'

function App() {

  return (
    <>
      <NavBar />
      <MainSlider />
      {/* <Section>
        <CategoriesGrid />
      </Section> */}
      <Section>
        {/* Aqui vao os childrens */}
        <SectionTile
          title="BESTSELLER PRODUCTS"
          subtitle="Problems trying to resolve the conflict between"
          tagline="Featured Products"
        />
      </Section>
      <Section>
        {/* Aqui vao os childrens */}
        <SectionTile
          title="Featured Posts"
          subtitle="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
          tagline="Practice Advice"
        />
      </Section>
    </>
  )
}

export default App
