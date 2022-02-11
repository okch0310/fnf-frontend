import styled from 'styled-components';
import useToggleContents from './hook/useToggleContents';
import SalesInventory from './SalesInventoryStatus/SalesInventory';

const SELECTED_COMPONENTS = {
  all: 'all',
  검색량: 'search',
  주간실적: <SalesInventory />,
  판매채널: 'channel',
};

export default function Category() {
  const { toggleContents, userSelectedSideMenu } = useToggleContents();

  return (
    <CategoryWrapper toggleContents={toggleContents}>
      {SELECTED_COMPONENTS[userSelectedSideMenu]}
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: ${props => (props.toggleContents ? 0 : 1)};
  transition: ${props => (props.toggleContents ? '' : 'opacity 0.1s ease')};
`;
