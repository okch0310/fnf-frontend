import { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const calendarInput = css`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  border-radius: 4px;
  box-shadow: inset 0 2px 2px #e9e9e9;
  border: 1px solid #aeaeae;
  line-height: 25px;
  background-color: white;
`;

const mixin = {
  flexCenter,
  calendarInput,
};

export default mixin;
