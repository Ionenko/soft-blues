import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #040f26e6;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

export const Heading = styled.h2`
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  margin-bottom: 1em;
  color: #fff;
`;

export const ContentInner = styled(Segment)`
  width: 720px;
  
  &&& {
    padding: 66px 66px;
    background: #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const Logo = styled.img`
  display: block;
  width: 10vmin;
  pointer-events: none;
  margin: auto;
  position: relative;
  animation: App-logo-spin infinite 20s linear;
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;


