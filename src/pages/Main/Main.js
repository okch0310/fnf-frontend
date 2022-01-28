import React, { useState } from 'react';
import axiosTestInstance from '../../utils/axiosTestInstance';

const Main = () => {
  const [testState, setTestState] = useState();

  axiosTestInstance({ url: '/list/all' }).then(res => setTestState(res));

  return <div>{testState}</div>;
};

export default Main;
