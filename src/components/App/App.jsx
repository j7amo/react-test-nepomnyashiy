import { useState, useEffect } from "react";
import List from '../List';
import Search from "../Search";
import './App.css';

const data = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJS',
];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
        <Search
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
        >
          Find course:
        </Search>
        <List items={items}/>
      </header>
    </div>
  );
}

export default App;
