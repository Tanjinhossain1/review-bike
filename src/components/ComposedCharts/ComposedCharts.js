import React, { useContext } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { sendChartData } from '../DashBoard/DashBoard';

const ComposedCharts = () => {
    const chartData = useContext(sendChartData)
    return (
        <div className='sm:mb-12 md:mb-12 m-6'>
            <ComposedChart width={800} height={400} data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default ComposedCharts;