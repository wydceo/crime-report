import { useEffect, useState } from "react";
import Header from './components/Header';
import Accordion from './components/Accordion';
import './App.css';

// import { crimeData } from "./mock/crime_record";

const App = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [action, setAction] = useState("suburb");

  useEffect(() => {
    let ignore = false;
    fetch(`./crime_record.json`)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setCrimeData(json);
        }
      });
    return () => {
      ignore = true;
    };

  }, [action]);

  const handleClickSuburbButton = () => {
    setAction("suburb");
  };

  const handleClickOffenceLevelTwoButton = () => {
    setAction("offence");
  };

  return (
    <div className="container">
      <>
      <button className="suburb_button" onClick={handleClickSuburbButton}>
        Group By Suburb
      </button>
      <button className="offenceleveltwo_button" onClick={handleClickOffenceLevelTwoButton}>
        Group By Offence Level 2 Description
      </button>
      </>
      <Header />
      <Accordion crimeData={crimeData} />
    </div>
  );
}

export default App;