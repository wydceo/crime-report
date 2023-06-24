import { crimeData } from "../crime_record"; // mock up date for testing
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <ul className="accordion">
      {crimeData.map((record, index) => (
        <AccordionItem
          key={index}
          record={record}
        />
      ))}
    </ul>
  );
};

export default Accordion;