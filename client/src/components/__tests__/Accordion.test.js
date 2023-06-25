import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from '../Accordion';

describe('<Accordion />', () => {
  it('should render items', () => {
    const crimeData = {
          "adelaide":
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
          ]
        };

    render(<Accordion crimeData={crimeData} />);

    crimeData['adelaide'].forEach(({ reported_date, postcode_incident }) => {
      const reportedDateEl = screen.queryByText(reported_date);
      const postcodeEl = screen.queryByText(postcode_incident);

      expect(reportedDateEl).toBeInTheDocument();
      expect(postcodeEl).toBeInTheDocument();
    });
  });

  it('should open when clicked on panel', () => {
    const crimeData = {
      "ALBERTON":
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
      ]
    };

    render(<Accordion crimeData={crimeData} />);

    crimeData['ALBERTON'].forEach(({ id }) => {
      const idEl = screen.queryByText(id);
      fireEvent.click(screen.getByText("+"))

      const activeListEls = document.querySelectorAll('li.active');
      
      const activeListEl = activeListEls[0];

      const currentListEl = idEl.closest('li');
      expect(activeListEls.length).toBe(1);
      expect(activeListEl).toEqual(currentListEl);
    });
  });

  it('should close if already opened', () => {
    const crimeData = {
      "ALBERTON":
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
      ]
    };

    render(<Accordion crimeData={crimeData} />);

    crimeData['ALBERTON'].forEach(({ id }) => {
      const suburbEl = screen.queryByText(id);
      fireEvent.click(screen.getByText("+"))
      fireEvent.click(screen.getByText("-"))

      const currentListEl = suburbEl.closest('li');

      expect(currentListEl).not.toHaveClass('active');
    });
  });
});