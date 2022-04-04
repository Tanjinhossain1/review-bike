import React, { useContext } from 'react';
import { Funnel, FunnelChart, LabelList, Tooltip } from 'recharts';
import { sendChartData } from '../DashBoard/DashBoard';

const FunnelCharts = () => {
    const chartData = useContext(sendChartData)

    return (
        <div className='m-6'>
            <FunnelChart width={730} height={550}>
                <Tooltip />
                <Funnel
                    dataKey="sell"
                    data={chartData}
                    isAnimationActive
                >
                    <LabelList position="right" fill="#8341e0" stroke="none" dataKey="month" />
                </Funnel>
            </FunnelChart>
        </div>
    );
};

export default FunnelCharts;