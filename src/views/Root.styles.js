import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-self: flex-start;
  border-right: 3px solid ${({ theme }) => theme.colors.lightPurple};
  box-sizing: border-box;
  & div {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    margin: 50px 0;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
  & h1 {
    color: white;
    width: 50%;
  }
  & a {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    text-decoration: none;
    text-align: right;
    margin-right: 20px;
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.darkGrey};
    &:hover {
      color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
