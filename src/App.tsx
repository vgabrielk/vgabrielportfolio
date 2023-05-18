import { Fragment} from 'react';
import Homepage from './pages/Homepage';
import Projects from './pages/Sections/Projects';
import Divider from './components/Divider';
import Services from './pages/Sections/Services';
import Footer from './components/Footer';

function App() {

  return (
    <Fragment>
      <Homepage />
      <Divider divider />
      <Services />
      <Divider />
      <Projects />
      <Divider />
      <Footer/>
    </Fragment>
  )
}

export default App
