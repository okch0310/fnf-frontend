/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import { AllCategoryContext } from '../../AllCategoryArea';
import styled from 'styled-components';
import { CustomCell } from './Inventory/RepeatCell';
import { Card } from '../../../../../../../components/ContentCard/ContentCard';
import ContentZoomIn from '../../../../../../../components/ContentToggle/ContentZoomIn';

import { dataStringFormatter } from '../../../../../../../utils/Functions';

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import Scrollbars from 'react-custom-scrollbars';

export default function AllSalesChannelTable({ selfComp, onlyTable, data }) {
  const { isZoomInClicked } = useContext(AllCategoryContext);
  return (
    <>
      {!isZoomInClicked && <ContentZoomIn name={selfComp} />}

      <CustomCard onlyTable={onlyTable} isZoomInClicked={isZoomInClicked}>
        <CustomTableContainer component={Paper}>
          <Scrollbars autoHide autoHideTimeout={200}>
            <CustomTable>
              <TableHead
                style={{
                  backgroundColor: '#377ef9',
                }}
              >
                <TableRow>
                  {data.length !== 0 &&
                    Object.keys(data[0]).map((key, idx) => {
                      return (
                        <CustomCell
                          className="headCell"
                          align="center"
                          key={idx}
                        >
                          {key}
                        </CustomCell>
                      );
                    })}
                </TableRow>
              </TableHead>
              <CustomTableBody>
                {data.map((dataObj, idx1) => {
                  {
                    return (
                      <TableRow key={idx1}>
                        {data.length !== 0 &&
                          Object.values(dataObj).map((value, idx2) => {
                            if (typeof value === 'string') {
                              return value.includes('http') ? (
                                <CustomCell key={idx2}>
                                  <ProductImg src={value} alt="Product" />
                                </CustomCell>
                              ) : (
                                <CustomCell align="center" key={idx2}>
                                  {value}
                                </CustomCell>
                              );
                            } else {
                              return (
                                <CustomCell align="center" key={idx2}>
                                  {dataStringFormatter(value)}
                                </CustomCell>
                              );
                            }
                          })}
                      </TableRow>
                    );
                  }
                })}
              </CustomTableBody>
            </CustomTable>
          </Scrollbars>
        </CustomTableContainer>
      </CustomCard>
    </>
  );
}

const ProductImg = styled.img`
  width: 40px;
`;
const CustomCard = styled(Card)`
  ${props => !props.isZoomInClicked && 'width:26vw;'};
  padding: 0;
`;

const CustomTableContainer = styled(TableContainer)`
  && {
    height: 100%;
    width: 100%;
  }
`;

const CustomTable = styled(Table)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CustomTableBody = styled(TableBody)`
  flex: 1;
`;
