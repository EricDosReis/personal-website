import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.25rem;
  font-weight: 300;
  padding: 0;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #1fa1f2;
  }
`

export const MenuLinksLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.25s;

  &:focus,
  &:hover {
    color: #1fa1f2;
  }
`
