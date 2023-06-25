import { useRef, useState, useContext } from "react";
import AccordionRecord from "./AccordionRecord";
import { groupTypeContext } from './../context/GroupTypeContext';

const AccordionItem = ( props ) => {
  const { item } = props;
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();
  const groupType = useContext(groupTypeContext);

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="panel" onClick={handleToggle}>
        {groupType === "suburb_incident" ? item[0].suburb_incident: item[0].offence_level_2}
        <span className="control">{clicked ? "-" : "+"}</span>
      </button>
      <div
        ref={contentEl}
        className="item_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="item">
          <table>
            <thead>
            <tr>
              <th>Id</th>
              <th>Reported Date</th>
              <th>Suburb</th>
              <th>Postcode</th>
              <th>Offence Level1</th>
              <th>Offence Level2</th>
              <th>Offence Level3</th>
              <th>Offence Count</th>
            </tr>
            </thead>
            <tbody>
              {item.map((record,index) => (
                <AccordionRecord
                  key={index}
                  record={record}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </li>
  )
}

export default AccordionItem;
