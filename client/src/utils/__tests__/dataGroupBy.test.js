import { dataGroupBy } from './../dataGroupBy';

describe('dataGroupBy', () => {
  test('If input data is [], converting will be {}', () => {
    const argA = [
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

    const assert = {
      "ALBERTON":[
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

    const result = dataGroupBy(argA, 'suburb_incident'); // Assert

    expect(result).toStrictEqual(assert);
  });
});