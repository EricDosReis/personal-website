import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #8899a6;
  display: flex;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  width: 100%;
`

export const PostItemTag = styled.div`
  background-color: ${({ background }) => background};
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  font-weight: 700;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.875rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6875rem;
  font-weight: 700;
  margin: 0.25rem 0;
`

export const PostItemDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 0.4125rem 0;
`
