import { render, screen } from '@testing-library/react';
import AccordionRecord from '../AccordionRecord';

describe('<AccordionRecord />', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should render AccordionRecord content', () => {
    const itemData = 
        {
          "id":11,
          "reported_date":"01/07/2019",
          "suburb_incident":"ALBERTON",
          "postcode_incident":5014,
          "offence_level_1":"OFFENCES AGAINST PROPERTY",
          "offence_level_2":"THEFT AND RELATED OFFENCES",
          "offence_level_3":"Theft from motor vehicle",
          "offence_count":1
        };
    render(
      <table>
        <tbody>
          <AccordionRecord
            key={1}
            record={itemData}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText(itemData.reported_date)).toBeInTheDocument();
    expect(screen.getByText(itemData.offence_level_2)).toBeInTheDocument();
  });
});