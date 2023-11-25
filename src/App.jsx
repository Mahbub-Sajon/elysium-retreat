import './App.css'
import Banner from './Home/Banner/Banner'
import Description from './Home/Description/Description'
import Footer from './Home/Footer/Footer'
import Map from './Home/Map/Map'
import Navbar from './Home/Navbar/Navbar'
import ResortOverviewVideo from './Home/ResortOverviewVideo/ResortOverviewVideo'
import Services from './Home/Services/Services'

function App() {

  return (
    <>
    <Navbar/>
     <Banner/>
     <Description/>
     <ResortOverviewVideo/>
     <Services/>
     <Map/>
     <Footer/>
    </>
  )
}

export default App
