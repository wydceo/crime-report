import { useEffect, useState } from "react";
import Header from './components/Header';
import Accordion from './components/Accordion';
import { dataGroupBy } from './utils/dataGroupBy';
import { groupTypeContext } from './context/GroupTypeContext';
import './App.css';

const App = () => {
  const [crimeData, setCrimeData] = useState({});
  const [action, setAction] = useState("suburb_incident");
  
  useEffect(() => {
    let ignore = false;
    fetch(`/api/crimes`)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          let resData = dataGroupBy(json, action);
          setCrimeData(resData);
        }
      });
    return () => {
      ignore = true;
    };

  }, [action]);

  const handleClickSuburbButton = () => {
    setAction("suburb_incident");
  };

  const handleClickOffenceLevelTwoButton = () => {
    setAction("offence_level_2");
  };

  return (
    <groupTypeContext.Provider value={action}>
      <div className="container">
        <button className="suburb_button" onClick={handleClickSuburbButton}>
          Group By Suburb
        </button>
        <button className="offenceleveltwo_button" onClick={handleClickOffenceLevelTwoButton}>
          Group By Offence Level 2 Description
        </button>
        <Header />
        <Accordion crimeData={crimeData} />
      </div>
    </groupTypeContext.Provider>
  );
}

export default App;