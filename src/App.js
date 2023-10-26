import './App.css';
import TabList from './components/TabList/tabList';

function App() {
  return (
    <div className="App">
      <TabList array={["Жк", "Округ", "Район", "Метро"]} />
    </div>
  );
}

export default App;
