
import { Container } from '@mui/system'
import Navbar from './components/Navbar/navbar'
import ItemListCotainer from './components/ItemListContainer/ItemListContainer'
import styles from "./App.module.css";

function App() {

  return (
    <>
      <Navbar/>    
      <ItemListCotainer greeting="Bienvenido"/>      
  
    </>
  )
}

export default App
