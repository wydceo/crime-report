import AccordionItem from "./AccordionItem";

const Accordion = ({crimeData}) => {
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