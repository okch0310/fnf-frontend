import React, { useState, useEffect } from 'react';

import { conditionData } from '../../../../../../../atom/staticData';
import { useRecoilValue } from 'recoil';

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

export default function GlobalCharts() {
  const [chartData, setChartData] = useState([]);

  const atomConditionData = useRecoilValue(conditionData);

  useEffect(() => {
    if (atomConditionData) {
      setChartData(
        atomConditionData.global?.data.map(item => {
          const newItem = {};
          newItem.end_dt = item.end_dt;
          newItem['한국'] = item.qty_kor_cy;
          newItem['중국'] = item.qty_chn_cy;
          newItem['홍마대'] = item.qty_gvl_cy;
          return newItem;
        })
      );
    }
  }, [atomConditionData]);

  return (
    <DomesticChart>
      <ChartsTitle title="한국 중국 글로벌" />
      {atomConditionData
        ? chartData && (
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
          )
        : ''}
    </DomesticChart>
  );
}

const DomesticChart = styled.div`
  width: 100%;
  flex-basis: 35%;
  height: 35%;
  background-color: white;
  overflow-x: hidden;
  overflow-y: auto;
`;
