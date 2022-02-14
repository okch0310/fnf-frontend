import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { AllCategoryContext } from '../../AllCategoryArea';

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import ContentZoomIn from '../../../../../../../components/ContentToggle/ContentZoomIn';

export default function SalesInventoryChart({ selfComp, data }) {
  const { isZoomInClicked } = useContext(AllCategoryContext);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(
      data.map(item => {
        const newItem = {};
        newItem['판매량 당해'] = item.sale_qty_kor_ttl;
        newItem['판매량 전년'] = item.sale_qty_kor_ttl_py;
        newItem['판매량 2년전'] = item.sale_qty_kor_ttl_py2;
        newItem['검색량 당해'] = item.search_qty_cy;
        newItem['검색량 전년'] = item.search_qty_py;
        return newItem;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isZoomInClicked && <ContentZoomIn name={selfComp} />}
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{
              top: 20,
              left: 10,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="end_dt" fontSize={12} />
            <YAxis domain={[0, 'data-max']} />
            <YAxis
              domain={[0, 'data-max']}
              yAxisId="right"
              orientation="right"
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="검색량 당해" barSize={20} fill="pink" />
            <Bar
              dataKey="검색량 전년"
              yAxisId="right"
              barSize={20}
              fill="skyblue"
            />
            <Line type="monotone" dataKey="판매량 당해" stroke="hotpink" />
            <Line type="monotone" dataKey="판매량 전년" stroke="grey" />
            <Line type="monotone" dataKey="판매량 2년전" stroke="green" />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </>
  );
}

const ChartWrapper = styled.section`
  height: 100%;
  padding: 10px;
`;
