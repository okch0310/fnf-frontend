import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const PERIOD = [
  { name: '당해', stroke: '#00b374' },
  { name: '전년', stroke: '#ffd688' },
];

export default function SearchEachChart({ chartName, data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(
      data.map(item => {
        const newItem = {};
        newItem.end_dt = item.end_dt;
        newItem['당해'] = item.search_qty_cy;
        newItem['전년'] = item.search_qty_py;
        return newItem;
      })
    );
  }, [data]);

  return (
    <ChartWrapper>
      <ChartTitle>{chartName} 검색어</ChartTitle>
      {chartData && (
        <ResponsiveContainer width="90%" height="90%">
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal={false} stroke="#efefef" />
            <XAxis
              dataKey="end_dt"
              stroke="#7b7b7b"
              axisLine={false}
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: 'none' }}
              dy={12}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: 'none' }}
              stroke="#7b7b7b"
              dx={-12}
              axisLine={false}
            />
            <Legend
              verticalAlign="top"
              iconSize={0}
              iconType="plainline"
              align="left"
              wrapperStyle={{
                left: 0,
                top: -10,
                fontSize: 12,
              }}
            />
            <Tooltip />
            {PERIOD.map(item => (
              <Line
                key=""
                dataKey={item.name}
                stroke={item.stroke}
                dot={false}
                type="monotone"
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const ChartTitle = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`;
