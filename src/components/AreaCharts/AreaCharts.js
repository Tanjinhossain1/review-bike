import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { sendChartData } from '../DashBoard/DashBoard';

const AreaCharts = () => {
    const chartData = useContext(sendChartData)
    return (
        <div className='sm:mb-12 md:mb-12 m-6'>
            <AreaChart width={800} height={400} data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    );
};

export default AreaCharts;