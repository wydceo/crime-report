import { useRef } from "react";
import { useState } from "react";

const AccordionItem = ({ record, onToggle, active }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();
  const { id,  reported_date} = record;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {id}
        <span className="control">{clicked ? "-" : "+"}</span>
      </button>
      <div
        ref={contentEl}
        className="record_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="record">{reported_date}</div>
      </div>
    </li>
  )
}

export default AccordionItem;
