import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Data } from './Data';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function FollowerChart() {
      
      const options = {
        // scales: {
        //     x: {
        //         type: 'time',
        //         time: {
        //             unit: 'month'
        //         }
        //     }
        // },
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
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Instagram Followers',
            data: Data.map((data) => data.userGain),
            borderColor: 'rgb(50, 168, 111)',
            backgroundColor: 'rgba(50, 168, 111, 0.5)',
          }
        ],
      };
      
    return <Line options={options} data={data} />;

}

export {FollowerChart}