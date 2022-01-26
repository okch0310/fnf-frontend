import React from 'react';
import styled, { keyframes } from 'styled-components';

const Modal = () => {
  return (
    <>
      <LoadingLogo src="/image/loadingLogo.png" alt="logo" />
      <LogoBackground />
    </>
  );
};

export default Modal;

const LogoBackground = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.114);
  backdrop-filter: blur(5px);
`;

const sayHelloAnimation = keyframes`
100% {
    	transform: rotate(360deg);
    }
`;

const LoadingLogo = styled.img`
  animation: ${sayHelloAnimation} 5s linear infinite;
  transform-origin: 50% 50%;
  width: 500px;
  z-index: 20;
  position: fixed;
  top: 20%;
  left: 32%;
`;
