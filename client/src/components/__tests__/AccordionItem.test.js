import { render, screen } from '@testing-library/react';
import AccordionItem from '../AccordionItem';

describe('<AccordionItem />', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should render AccordionItem content', () => {
    const itemData = 
      [
        {
          "id":11,
          "reported_date":"01/07/2019",
          "suburb_incident":"ALBERTON",
          "postcode_incident":5014,
          "offence_level_1":"OFFENCES AGAINST PROPERTY",
          "offence_level_2":"THEFT AND RELATED OFFENCES",
          "offence_level_3":"Theft from motor vehicle",
          "offence_count":1
        }
      ];
    render(
      <AccordionItem
        key={1}
        item={itemData}
      />
    );

    expect(screen.getByText(itemData[0].reported_date)).toBeInTheDocument();
    expect(screen.getByText(itemData[0].offence_level_2)).toBeInTheDocument();
  });
});