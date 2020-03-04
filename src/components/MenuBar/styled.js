import styled from "styled-components";
import { Link } from "gatsby";

export const MenuBarWrapper = styled.aside`
  background-color: #192734;
  border-left: 1px solid #38333d;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 3.75rem;
  padding: .8125rem 0;
  position: fixed;
  right: 0;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.125rem;
  position: relative;
`;
