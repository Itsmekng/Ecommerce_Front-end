import './App.css'
import Header from './models/Header'
import Footer from './models/Footer'
import Appbar from './models/Appbar.jsx'
import Home from './components/Home.jsx'

function App() {

  return (
    <div className='bg-[#f4efe1]'>
      <Header/>
      <Home/>
      <Footer/>
      <Appbar />
    </div>
  )
}

export default App
