import { useRef, useState } from "react";

const AccordionItem = ({ record }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();
  const { id,  reported_date} = record;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="panel" onClick={handleToggle}>
        {id}
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
        <div className="item">{reported_date}</div>
      </div>
    </li>
  )
}

export default AccordionItem;
