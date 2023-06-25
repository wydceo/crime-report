/* Converting 
** From eg: 
{
    "id":11,
    "reported_date":"01/07/2019",
    "suburb_incident":"ALBERTON",
    "postcode_incident":5014,
    "offence_level_1":"OFFENCES AGAINST PROPERTY",
    "offence_level_2":"THEFT AND RELATED OFFENCES",
    "offence_level_3":"Theft from motor vehicle",
    "offence_count":1
} to
eg: {
        "adelaide":
            [{
                "id":11,
                "reported_date":"01/07/2019",
                "suburb_incident":"ALBERTON",
                "postcode_incident":5014,
                "offence_level_1":"OFFENCES AGAINST PROPERTY",
                "offence_level_2":"THEFT AND RELATED OFFENCES",
                "offence_level_3":"Theft from motor vehicle",
                "offence_count":1
            }]
    }
  */
export const dataGroupBy = (data, property) => {
    return data.reduce(function (memo, x) {
        if (!memo[x[property]]) { memo[x[property]] = []; }
        memo[x[property]].push(x);
        return memo;
    }, {});
}