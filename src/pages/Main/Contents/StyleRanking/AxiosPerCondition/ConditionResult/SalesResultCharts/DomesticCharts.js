import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ChartsTitle from '../../ChartsTitle/ChartsTitle';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    end_dt: '21.11.28',
    qty_retail_cy: 7488,
    qty_dutyrfwhole_cy: 8006,
  },
  {
    end_dt: '21.12.05',
    qty_retail_cy: 4714,
    qty_dutyrfwhole_cy: 11251,
  },
  {
    end_dt: '21.12.20',
    qty_retail_cy: 5414,
    qty_dutyrfwhole_cy: 15151,
  },
];

export default function DomesticCharts() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(
      data.map(item => {
        const newItem = {};
        newItem.end_dt = item.end_dt;
        newItem['국내'] = item.qty_retail_cy;
        newItem['면세RF도매'] = item.qty_dutyrfwhole_cy;
        return newItem;
      })
    );
  }, []);

  return (
    <DomesticChart>
      <ChartsTitle title="국내/RF 면세도매" />
      {chartData && (
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid horizontal={false} stroke="#efefef" />
            <XAxis
              dataKey="end_dt"
              stroke="#7b7b7b"
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: 'none' }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: 'none' }}
              stroke="#7b7b7b"
              dx={-6}
              axisLine={false}
            />
            <Legend
              iconSize={10}
              iconType="circle"
              align="left"
              wrapperStyle={{
                left: 22,
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="국내"
              stroke="#67a8a6"
              strokeWidth={2.2}
            />
            <Line
              type="monotone"
              dataKey="면세RF도매"
              stroke="#58ddd9"
              strokeWidth={2.2}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      )}
    </DomesticChart>
  );
}

const DomesticChart = styled.div`
  width: 100%;
  flex-basis: 35%;
  background-color: white;
`;
