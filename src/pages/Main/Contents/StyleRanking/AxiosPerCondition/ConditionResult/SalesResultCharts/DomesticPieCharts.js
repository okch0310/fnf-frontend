import React from 'react';
import styled from 'styled-components';

import ChartsTitle from '../../ChartsTitle/ChartsTitle';

import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const pieData = [
  {
    name: '국내',
    value: 328,
  },
  {
    name: '면세/RF/도매',
    value: 827,
  },
];

const RADIAN = Math.PI / 180;

const COLORS = ['#0088FE', '#00C49F'];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DomesticPieCharts() {
  return (
    <PieChartContainer>
      <ChartsTitle title="판매 트렌드 비율" />
      {pieData && (
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={pieData}
              isAnimationActive={false}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              dataKey="value"
            >
              {pieData.map((pieItem, idx) => (
                <Cell key={`salesTrendRatioPie-${idx}`} fill={COLORS[idx]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend
              iconSize={10}
              iconType="circle"
              align="left"
              wrapperStyle={{
                left: 22,
                bottom: 18,
                fontSize: 12,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </PieChartContainer>
  );
}

const PieChartContainer = styled.div`
  width: 100%;
  flex-basis: 30%;
  background-color: white;
`;
