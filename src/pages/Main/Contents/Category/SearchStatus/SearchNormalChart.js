import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgMenuRight } from 'react-icons/cg';

import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';

// const data = [
//   {
//     end_dt: '21.02.07',
//     search_qty_cy: 11705,
//     search_qty_py: 15665,
//   },
//   {
//     end_dt: '21.02.14',
//     search_qty_cy: 12941,
//     search_qty_py: 17138,
//   },
// ];

export default function SearchNormalChart({ data }) {
  const [normalChart, serNormalChart] = useState([]);

  useEffect(() => {
    serNormalChart(
      data.map(item => {
        const newItem = {};
        newItem.end_dt = item.end_dt;
        newItem['당해'] = item.search_qty_cy;
        newItem['전년'] = item.search_qty_py;
        return newItem;
      })
    );
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltips>
          <Label>{`${label} / MLB : ${payload[1].value}`}</Label>
          {payload.map(item => (
            <DataKeys
              key={item.dataKey}
            >{`${item.dataKey} : ${item.value}`}</DataKeys>
          ))}
        </CustomTooltips>
      );
    }
    return null;
  };

  return (
    <ChartWrapper>
      <ChartTitle>
        일반 검색어
        <CgMenuRight />
      </ChartTitle>
      {normalChart && (
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart
            data={normalChart}
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 70,
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
              dx={-6}
              axisLine={false}
            />
            <Legend
              verticalAlign="top"
              iconSize={10}
              iconType="circle"
              align="left"
              wrapperStyle={{
                left: 22,
                top: -10,
                fontSize: 16,
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="전년"
              stroke="#5877ad"
              strokeWidth={2.2}
              fillOpacity={1}
              fill="url(#LastYear)"
            />
            <Area
              type="monotone"
              dataKey="당해"
              stroke="#377ef9"
              strokeWidth={2.2}
              fillOpacity={1}
              fill="url(#ThisYear)"
            />
            <defs>
              <linearGradient id="ThisYear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#377ef9" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#377ef9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="LastYear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5877ad" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#5877ad" stopOpacity={0} />
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 29vw;
  height: 100%;
`;

const ChartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 24px 24px;
  font-size: 22px;
  font-weight: 800;
  color: white;
  background-color: #377ef9;
  border-radius: 7px 7px 0 0;
  margin-bottom: 30px;

  svg:hover {
    cursor: pointer;
  }
`;

const CustomTooltips = styled.div`
  background-color: #06183a;
  border: 1px solid #efefef;
  border-radius: 7px;
  padding: 16px;
`;

const Label = styled.p`
  padding: 16px;
  font-size: 18px;
  font-weight: 800;
  color: white;
`;

const DataKeys = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: 200;
  color: #6391f4;
`;
