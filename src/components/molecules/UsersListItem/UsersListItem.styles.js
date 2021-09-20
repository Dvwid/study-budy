import styled from 'styled-components';

export const Average = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background-color: ${({ value, theme }) => {
    if (value < 2) {
      return theme.colors.darkPurple;
    } else if (value < 4) {
      return theme.colors.warning;
    } else {
      return theme.colors.success;
    }
  }}; ;
`;

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 100px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100px;
  p:first-of-type {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:last-of-type {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
