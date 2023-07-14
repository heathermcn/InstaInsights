import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Data } from '../Data';
import { Pane, Text, Heading, majorScale, Button } from 'evergreen-ui';

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function FollowerChart() {
  const [timeUnit, setTimeUnit] = useState('day');

  function timeUnitChange(unit) {
    setTimeUnit(unit);
    console.log('time unit change');
  }

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          parser: 'yyyy-MM-dd',
          unit: timeUnit,
          tooltipFormat: 'yyyy-MM-dd',
          displayFormats: {
            day: 'MMM dd yyyy'
          }
        },
        distribution: "linear",
        title: {
          display: true,
          text: "Date"
        }
      },
      y: {
        title: {
          display: true,
          text: "Followers",
        },
        min: 0
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Follower Count',
      },
    },
  };

  const data = {
    labels: Data.map((data) => data.date),
    datasets: [
      {
        label: 'Instagram Followers',
        data: Data.map((data) => data.followers),
        borderColor: 'rgb(50, 168, 111)',
        backgroundColor: 'rgba(50, 168, 111, 0.5)',
      }
    ],
  };

  return (
    <div>
      <Pane height={600} width={1200} display="flex" alignItems="center" justifyContent="center" border="default">
        <Line options={options} data={data} />
      </Pane>
      <Pane display="flex" alignItems="center" justifyContent="center" marginX={majorScale(2)}>
        <Button onClick={() => timeUnitChange('day')}>Day</Button>
        <Button onClick={() => timeUnitChange('month')}>Month</Button>
        <Button onClick={() => timeUnitChange('year')}>Year</Button>
      </Pane>
    </div>
  )
}

export { FollowerChart }