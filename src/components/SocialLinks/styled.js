import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding: 0;
`
export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.25s;

  &:focus,
  &:hover {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  height: 30px;
  width: 30px;
`
