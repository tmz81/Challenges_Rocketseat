import styled from "styled-components";
import Cups from "../../assets/Cups.svg";

export const Content = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 90px;
      font-weight: bold;
      color: var(--text-color);
    }

    h2 {
      font-size: 90px;
      text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
        -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }
  }
`;

export const Banner = styled.div`
  width: 998px;
  height: 562px;

  background-image: url(${Cups});
  background-size: cover;
`;

export const CircleBlurTop = styled.span`
  background-color: var(--button);
  width: 320px;
  height: 321px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  filter: blur(200px);
`;

export const CircleBlurBottom = styled.span`
  background-color: var(--button);
  width: 320px;
  height: 321px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;
  filter: blur(200px);
`;
