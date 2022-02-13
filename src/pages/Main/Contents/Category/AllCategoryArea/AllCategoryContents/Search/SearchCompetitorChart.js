import React from 'react';
import styled from 'styled-components';
import {
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

const BRAND_NAME = [
  { name: '구찌', stroke: '#6391f4' },
  { name: '나이키', stroke: '#384e75' },
  { name: '루이비통', stroke: '#40d9d4' },
  { name: '버버리', stroke: '#00b374' },
  { name: '프라다', stroke: '#ffd688' },
];

export default function SearchCompetitorChart({ data }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltips>
          <Label>{`${label} : ${payload[0].value}`}</Label>
          {payload.map(item => (
            <DataKeys key="end_dt">{`${item.dataKey} : ${item.value}`}</DataKeys>
          ))}
        </CustomTooltips>
      );
    }
    return null;
  };

  return (
    <ChartWrapper>
      <ChartTitle>경쟁사 검색어 추이</ChartTitle>
      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <CartesianGrid horizontal={false} stroke="#efefef" />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: 'none' }}
            stroke="#7b7b7b"
            axisLine={false}
            dx={-12}
          />
          <XAxis
            dataKey="end_dt"
            stroke="#7b7b7b"
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: 'none' }}
            dy={12}
          />
          <Legend
            verticalAlign="top"
            iconSize={0}
            iconType="plainline"
            align="left"
            wrapperStyle={{
              top: -10,
              fontSize: 12,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#DB4644" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#DB4644" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="MLB"
            stroke="#DB4644"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#color)"
          />
          {BRAND_NAME.map(item => (
            <Line
              key=""
              dataKey={item.name}
              stroke={item.stroke}
              dot={false}
              type="monotone"
              strokeWidth={2}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
`;

const ChartTitle = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
`;

const CustomTooltips = styled.div`
  background-color: white;
  color: black;
  padding: 24px;
`;

const Label = styled.p``;
const DataKeys = styled.div``;
