const AccordionRecord = ( { record } ) => {
  const { id,reported_date,suburb_incident,postcode_incident,
        offence_level_1,offence_level_2,offence_level_3,offence_count} = record;

  return(
    <tr key={id}>
      <td>{id}</td>
      <td>{reported_date}</td>
      <td>{suburb_incident}</td>
      <td>{postcode_incident}</td>
      <td>{offence_level_1}</td>
      <td>{offence_level_2}</td>
      <td>{offence_level_3}</td>
      <td>{offence_count}</td>
    </tr>
  )
}

export default AccordionRecord;
