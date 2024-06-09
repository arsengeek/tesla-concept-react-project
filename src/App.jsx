import Header from './components/Lobby/Header'
import BackVideo from './components/Lobby/Model_3_Section'
import Model_X_Section from './components/Lobby/Model_X_Section'
import Model_Y_Section from './components/Lobby/Model_Y_Section'
import RegistrationForm from './components/Lobby/RegistrationForm'
import CookieBlock from './components/Lobby/CokieBlock'
import CyberTruck from './components/Lobby/CyberTruck'
import TeslaHouse from './components/Lobby/TeslaHouse'
import CharingBlock from './components/Lobby/Charing'
import SnowChanse from './components/Lobby/SnowChense'
import CustomTesla from './components/Lobby/CustomCyberTruck'
import Recomendation from './components/Lobby/Recomendation'

export default function App() {

  return (
    <>
    <BackVideo/>
    <Header/>   
    <Model_Y_Section/>
    <Model_X_Section/>
    <RegistrationForm/>
    <CookieBlock/>
    <CyberTruck/>
    <TeslaHouse/>
    <CharingBlock/>
    <SnowChanse/>
    <CustomTesla/>
    <Recomendation/>
    </>
  )
}
