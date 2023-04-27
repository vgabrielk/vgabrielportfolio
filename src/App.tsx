import { Fragment} from 'react';
import Homepage from './pages/Homepage';
import Projects from './pages/Sections/Projects';
import Divider from './components/Divider';

function App() {

  return (
    <Fragment>
      <Homepage />
      <Divider/>
      <Projects />
    </Fragment>
  )
}

export default App
