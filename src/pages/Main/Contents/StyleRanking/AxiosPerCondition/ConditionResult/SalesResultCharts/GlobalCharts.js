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
    qty_kor_cy: 15494,
    qty_chn_cy: 6218,
    qty_gvl_cy: 820,
  },
  {
    end_dt: '21.12.05',
    qty_kor_cy: 15965,
    qty_chn_cy: 5806,
    qty_gvl_cy: 1024,
  },
];

export default function GlobalCharts() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(
      data.map(item => {
        const newItem = {};
        newItem.end_dt = item.end_dt;
        newItem['한국'] = item.qty_kor_cy;
        newItem['중국'] = item.qty_chn_cy;
        newItem['홍마대'] = item.qty_gvl_cy;
        return newItem;
      })
    );
  }, []);

  return (
    <DomesticChart>
      <ChartsTitle title="한국 중국 글로벌" />
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
                bottom: 1,
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="한국"
              stroke="#67a8a6"
              strokeWidth={2.2}
            />
            <Line
              type="monotone"
              dataKey="중국"
              stroke="#58ddd9"
              strokeWidth={2.2}
            />
            <Line
              type="monotone"
              dataKey="홍마대"
              stroke="#58a3dd"
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
