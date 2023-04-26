import { Fragment, useEffect } from 'react';
import client from './services/contentful';
import Homepage from './pages/Homepage';

function App() {
  
  useEffect(() => {
      client.getEntries({
        content_type: "projects"
      })
      .then((res : any) => console.log(res));
    },[])
  return (
    <Fragment>
      <Homepage />
    </Fragment>
  )
}

export default App
