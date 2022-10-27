import React, {useState} from 'react';

const ResultTest = (props) => {
    let countries = [
    'SouthAfrica', 'Libya', 'Jordan',
    'Uzbekistan', 'Fiji', 'Tunisia', 'Egypt', 'Mongolia',
    'Ecuador', 'Turkmenistan', 'Azerbaijan', 'Algeria',
    'Maldives', 'Colombia', 'Brazil', 'Mexico', 'Armenia',
    'Peru', 'Cuba', 'Moldova', 'Dominica', 'China',
    'Macedonia', 'Ukraine', 'Iran', 'Bosnia','SriLanka',
    'Bulgaria', 'Thailand', 'Serbia', 'Georgia', 'Malaysia',
    'Panama', 'Belarus', 'Uruguay', 'CostaRica', 'Kazakhstan',
    'Bahamas', 'Oman', 'Romania', 'Russia', 'Brunei', 'Kuwait',
    'Montenegro', 'Turkey', 'Argentina', 'Hungary', 'Slovakia',
    'Qatar', 'Chile', 'Croatia', 'Andorra', 'Latvia', 'Portugal',
    'SaudiArabia', 'Lithuania', 'Bahrain', 'Poland', 'Greece',
    'Czechia', 'Estonia', 'Italy', 'Cyprus', 'France',
    'Spain', 'UAE', 'Austria', 'Slovenia', 'Malta', 'Israel',
    'USA', 'SouthKorea', 'Japan', 'UK', 'Luxembourg', 'Canada',
    'New Zealand', 'Belgium', 'Singapore', 'Finland',
    'Netherlands', 'Germany', 'Ireland', 'Sweden', 'Denmark',
    'Australia', 'Hong Kong', 'Iceland', 'Norway', 'Switzerland']
    let u = {
        loyal: 0,
        social: 0,
        weather: 0,
        tourism: 0,
        citizenship: 0,
        drugs: 0,
        edu: 0,
        work: 0,
        monOrSea: 0,
        medicine: 0,
        english: 0,
        politic: 0,
        house: 0,
    }

    const [res, setRes] = useState('')
    let gooder = 0
    const changer = () => {
        let i = 0
        while(i<props.result.length){
            if(props.result[i] != '0') {
                gooder++
            }
            i++
        }
        if(gooder==23){setRes(props.result)}
        console.log(res)
        FilterFunc(res)
    }

    //здесь мясо начинается
    const FilterFunc = (res) => {
        if(res[0] == 1){u.medicine++; u.edu++; u.social++}
        if(res[0] == 3){u.medicine++; u.work++}
        if(res[0] == 4){u.medicine +=2}

        if(res[1] == 2){u.loyal++}
        if(res[1] == 3){u.loyal += 2}

        if(res[2] <= 2){u.loyal++}

        if(res[3] == 1){u.social += 2}
        if(res[3] == 2){u.social++}

        if(res[4] == 1){u.medicine++; u.edu++}
        if(res[4] == 2){u.edu++}

        u.weather = res[5]

        u.tourism = res[6]

        
    }
    //мясо всё

    return (
        <div style={containerStyle}>
            <button style={buttonStyle} onClick={changer}>result</button>
            <div>{props.result}</div>
            <div>{res}</div>
        </div>
    );
};

export default ResultTest;

const containerStyle = {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
}
const buttonStyle = {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 20,
    paddingBottom: 20,
}