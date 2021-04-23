import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {


    const dataPoints = [
        {
            label: 'Jan',
            value: 0,
            id: Math.random()
        }, {
            label: 'Feb',
            value: 0,
            id: Math.random()
        }, {
            label: 'Mar',
            value: 0,
            id: Math.random()
        }, {
            label: 'Apr',
            value: 0,
            id: Math.random()
        }, {
            label: 'May',
            value: 0,
            id: Math.random()
        }, {
            label: 'Jun',
            value: 0,
            id: Math.random()
        }, {
            label: 'Jul',
            value: 0,
            id: Math.random()
        }, {
            label: 'Aug',
            value: 0,
            id: Math.random()
        }, {
            label: 'Sep',
            value: 0,
            id: Math.random()
        }, {
            label: 'Oct',
            value: 0,
            id: Math.random()
        }, {
            label: 'Nov',
            value: 0,
            id: Math.random()
        }, {
            label: 'Dec',
            value: 0,
            id: Math.random()
        },
    ];


    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        dataPoints[expenseMonth].value += expense.cost;
    }

    return (
        <Chart dataPoints = {dataPoints}/>
    )
}

export default ExpensesChart;