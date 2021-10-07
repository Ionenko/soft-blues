import styled, { css } from 'styled-components';
import { Segment, Input, Dropdown } from 'semantic-ui-react';

export const Container = styled(Segment)`
  margin: auto;
  
  &&& {
    padding: 0;
    background: linear-gradient(141deg, rgba(0,119,188,1) 20%, rgba(36,174,246,1) 100%);
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 14px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 30px;
`;

export const DetailsItem = styled.div`
  padding: 10px 0;
  margin: 0 0 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;
  flex-shrink: 0;
  flex-basis: 40%;
  background: #0D92DE;
`;

export const PreviewImage = styled.img`
  display: block;
  object-fit: contain;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  
`;

export const Text = styled.div`
  color: #fff;
  &:not(:last-child) {
    margin-bottom: 0.2em;
  }
  
  ${({ size }) => {
    if (size === 'md') {
      return css`
        font-size: 1.36em;
      `;
    } else if(size === 'lg') {
      return css`
        font-size: 2em;
        font-weight: 700;
      `;
    } else {
      return css`
        font-size: 1em;
        color: rgba(255, 255, 255, 0.72);
      `;
    }
  }}
`;

export const Field = styled(Input)`
  width: 100%;
`;

export const DropDownField = styled(Dropdown)`
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: rgba(215, 56, 56, .66);
  text-align: center;
  font-size: 14px;
  padding: 10px 10px;
  border: 1px solid currentColor;
  border-radius: 2px;
  margin-top: 20px;
  
  h3 {
    font-size: 4em;
  }
  
  p {
    font-size: 1.2em;
    text-transform: uppercase;
    margin: 0;
  }
`;
