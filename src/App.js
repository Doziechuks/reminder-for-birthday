
import { useEffect, useState } from 'react';
import List from './components/list';

function App() {
  const [persons, setPersons] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((names) => setPersons(names));
  }, [])
  const clear = ()=>{
    setPersons([])
  }
  return (
    <div className="container">
      <section className="main">
        <List persons={persons} />

        <button onClick={clear} className="btn">Clear all</button>
      </section>
    </div>
  );
}

export default App;
