import styled, { css } from "styled-components"
import { IWrapperProps } from "./type"

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  cursor: pointer;
  margin: 10px 10px 15px 10px;
  border-radius: 10px;
  overflow: hidden;
  /* -webkit-box-shadow: 5px 5px 25px 5px rgba(	200, 200, 169, 0.75); */
  /* -moz-box-shadow: 5px 5px 25px 5px rgba(	200, 200, 169, 0.75); */
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.55);
  }

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 3px 3px 3px 1px rgba(180, 67, 101, 0.85);
    `}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  & .title {
    color: #333;
    font-size: 16px;
    font-weight: 500;
  }
  & .count {
    font-size: 15px;
    font-weight: 500;
  }
`
