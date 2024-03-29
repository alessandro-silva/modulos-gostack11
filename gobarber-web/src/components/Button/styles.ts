import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;
  transition: border 0.5s;

  &:hover {
    background: #312e38;
    border: 6px solid #ff9000;
    color: #ff9000;
  }
`;
