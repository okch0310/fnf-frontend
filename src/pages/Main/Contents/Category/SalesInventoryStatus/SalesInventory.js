import React, { useState } from 'react';
import SalesInventoryChart from './SalesInventoryChart';
import ContentCard from '../../../../../components/ContentCard/ContentCard';
import SalesInventoryTable from './SalesInventoryTable';
import SalesPerformanceTable from './SalesPerformanceTable';
import SalesPerformanceSeasonTable from './SalesPerformanceSeasonTable';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { staticData } from '../../../../../atom/staticData';
import Modal from 'react-modal';
Modal.setAppElement('#root');
export default function SalesInventory() {
  const [atomStaticData, setAtomStaticData] = useRecoilState(staticData);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleModalTwo() {
    setIsOpenTwo(!isOpenTwo);
  }

  function toggleModalThree() {
    setIsOpenThree(!isOpenThree);
  }

  function toggleModalFour() {
    setIsOpenFour(!isOpenFour);
  }
  return (
    <InventoryWrapper>
      <LeftWrapper>
        <WrapperOne onClick={toggleModal}>
          <ContentCard
            children={
              <SalesInventoryChart
                data={atomStaticData.salesWeeklySummary.data}
              />
            }
          />
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            style={{
              content: {
                left: '6%',
              },
            }}
          >
            <button onClick={toggleModal}>X</button>
            <ContentCard
              children={
                <SalesInventoryChart
                  data={atomStaticData.salesWeeklySummary.data}
                />
              }
            />
          </Modal>
        </WrapperOne>

        <WrapperTwo onClick={toggleModalTwo}>
          <ContentCard
            children={
              <SalesInventoryTable
                data={atomStaticData.salesWeeklySummary.data}
              />
            }
          />
          <Modal
            isOpen={isOpenTwo}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            style={{
              content: {
                left: '6%',
              },
            }}
          >
            <button onClick={toggleModalTwo}>X</button>
            <ContentCard
              children={
                <SalesInventoryTable
                  data={atomStaticData.salesWeeklySummary.data}
                />
              }
            />
          </Modal>
        </WrapperTwo>
      </LeftWrapper>
      <RightWrapper>
        <WrapperThree onClick={toggleModalThree}>
          <ContentCard
            children={
              <SalesPerformanceTable
                data={atomStaticData.salesSummaryAcc.data}
              />
            }
          />
          <Modal
            isOpen={isOpenThree}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            style={{
              content: {
                left: '6%',
              },
            }}
          >
            <button onClick={toggleModalThree}>X</button>
            <ContentCard
              children={
                <SalesPerformanceTable
                  data={atomStaticData.salesSummaryAcc.data}
                />
              }
            />
          </Modal>
        </WrapperThree>
        <WrapperFour onClick={toggleModalFour}>
          <ContentCard
            children={
              <SalesPerformanceSeasonTable
                data={atomStaticData.salesSummaryAccSesn.data}
              />
            }
          />
          <Modal
            isOpen={isOpenFour}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            style={{
              content: {
                left: '6%',
              },
            }}
          >
            <button onClick={toggleModalFour}>X</button>
            <ContentCard
              children={
                <SalesPerformanceSeasonTable
                  data={atomStaticData.salesSummaryAccSesn.data}
                />
              }
            />
          </Modal>
        </WrapperFour>
      </RightWrapper>
    </InventoryWrapper>
  );
}

const InventoryWrapper = styled.section`
  width: 90vw;
  height: 100%;
  display: flex;
  gap: 2vw;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  height: 46%;
  gap: 2vh;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 52%;
  height: 46%;
  gap: 2vh;
`;

const WrapperOne = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;

const WrapperTwo = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;

const WrapperThree = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;

const WrapperFour = styled.div`
  /* :hover {
    border: 2px solid grey;
    border-radius: 5px;
    width: 1325px;
    height: 750px;
    position: fixed;
  } */
`;
