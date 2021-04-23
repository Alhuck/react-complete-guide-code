import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';


const Chart = (props) => {

    const valueArgs = props.dataPoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...valueArgs);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar 
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}                
            />
            )}
        </div>

    )
}

export default Chart;