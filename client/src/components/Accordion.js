import AccordionItem from "./AccordionItem";

const Accordion = ({crimeData}) => {
  return (
    <ul className="accordion">
      {Object.keys(crimeData).map((item) => (
        <AccordionItem
          key={item}
          item={crimeData[item]}
        />
      ))}
    </ul>
  );
};

export default Accordion;