import { Fragment} from 'react';
import Homepage from './pages/Homepage';
import Projects from './pages/Sections/Projects';
import Divider from './components/Divider';
import Services from './pages/Sections/Services';

function App() {

  return (
    <Fragment>
      <Homepage />
      <Divider divider/>
      <Projects />
      <Divider />
      <Services />
      <Divider divider />
    </Fragment>
  )
}

export default App
