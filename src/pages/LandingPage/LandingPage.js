import LandingPageContents from './LandingPageContents';

import styled from 'styled-components';

const LANDING_PAGE_MENUS = ['category', 'styleRanking'];

export default function LandingPage() {
  return (
    <LandingPageWrapper>
      {LANDING_PAGE_MENUS.map(item => (
        <LandingPageContents key={item} name={item} />
      ))}
    </LandingPageWrapper>
  );
}

const LandingPageWrapper = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColors.backColor};
`;
