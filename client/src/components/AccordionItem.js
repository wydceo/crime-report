const AccordionItem = ({ record }) => {
  const { id,  reported_date} = record;
  return (
    <li className="accordion_item">
      <button className="button">
        {id}
        <span className="control">—</span>
      </button>
      <div className="record_wrapper">
        <div className="record">{reported_date}</div>
      </div>
    </li>
  )
}

export default AccordionItem;
