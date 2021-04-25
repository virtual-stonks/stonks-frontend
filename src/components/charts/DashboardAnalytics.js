import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';


const DashboardAnalytics = ({labels, values}) => {      
    
    const dynamicColors = () =>  {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return [ "rgb(" + r + "," + g + "," + b + ", 0.2" + ")", "rgb(" + r + "," + g + "," + b + ", 1" + ")"];
    }

    console.log(labels, values);

    let backgroundColor= [], borderColor = [];
    for(let i = 0; i < labels.length; i++){
        let tmpColors = dynamicColors();
        backgroundColor.push(tmpColors[0]);
        borderColor.push(tmpColors[1]);
    };

    const data = {
        labels,
        datasets: [
            {
                label: '$',
                data: values,
                backgroundColor,
                borderColor,
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            {console.log(labels, values)}
            <div className='header'>
                <div className='links'>
                    <h3 className='btn btn-gh'>Portfolio</h3>
                </div>
            </div>
            <Pie data={data} />
        </>
    )
};

export default DashboardAnalytics;