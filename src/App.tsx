import './App.css'
import client from './services/contentful';

function App() {
  
  client.getEntries().then(function (entries) {
    console.log(entries);
  });
  return (
    <>
    </>
  )
}

export default App
