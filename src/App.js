import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './components/Button/button';
import Dropdown from './components/Dropdown/dropdown';

function App() {
  const [activeData, setActiveData] = useState([]);
  const [active, setActive] = useState(false);

  const getActiveData = useCallback((data) => {
    if (activeData.includes(data)) {
      const newActiveData = activeData.filter(item => item !== data);
      setActiveData(newActiveData);
    } else {
      setActiveData([...activeData, data]);
    }
  }, [activeData])

  const dropdown = useMemo(() => {
    if (active) {
      return (
        <Dropdown activeData={activeData} getActiveData={getActiveData}/>
      )
    }
    return null;
  }, [active, activeData, getActiveData])

  return (
    <div className="App">
      <div className='container'>
        <h2 className='title'>Локация</h2>
        <Button active={active} onClick={(() => setActive(!active))} sum={activeData.length} />
        {dropdown}
      </div>
    </div>  
  );
}

export default App;
