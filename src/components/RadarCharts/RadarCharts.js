import React, { useContext } from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import { sendChartData } from '../DashBoard/DashBoard';

const RadarCharts = () => {
    const chartData = useContext(sendChartData)

    return (
        <div className='mb-32'>
            <RadarChart outerRadius={250} width={730} height={600} data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Tamjid" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip></Tooltip>
                <Radar name="Arafat" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </div>
    );
};

export default RadarCharts;