import React, { createContext, useEffect, useState } from 'react';
import AreaCharts from '../AreaCharts/AreaCharts';
import ComposedCharts from '../ComposedCharts/ComposedCharts';
import FunnelCharts from '../FunnelCharts/FunnelCharts';
import RadarCharts from '../RadarCharts/RadarCharts';
import './DashBoard.css'

export const sendChartData = createContext('send data')
const DashBoard = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])

    return (
        <sendChartData.Provider value={chartData}>
            <div className='ml-12 mt-12  charts-responsive '>
                <AreaCharts></AreaCharts>
                <ComposedCharts></ComposedCharts>
                <RadarCharts></RadarCharts>
                <FunnelCharts></FunnelCharts>
            </div>
        </sendChartData.Provider>
    );
};

export default DashBoard;