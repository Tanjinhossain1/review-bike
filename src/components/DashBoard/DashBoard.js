import React, { useEffect, useState } from 'react';

const DashBoard = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setChartData(data))
    }, [])
    console.log(chartData)
    return (
        <div>
            <h1>hi i am daha</h1>
        </div>
    );
};

export default DashBoard;