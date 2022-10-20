import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 50px;
  font-weight: 500;
  font-size: 20px;

  div {
    display: inline-block;
    margin-right: 149px;
  }

  ul {
    display: flex;
    gap: 2rem;

    .link {
      color: var(--text-color);
      &:hover {
        color: var(--button);
        transition: 0.2s ease-out;
      }
    }
  }

  button {
    margin-left: 130px;
    padding: 11px 38px;
    border: 2px solid var(--button);
    border-radius: 6px;
    background-color: transparent;

    font-family: "Manrope";
    font-weight: 900;
    color: var(--text-color);

    cursor: pointer;

    &:hover {
      background-color: var(--button);
      transition: 0.2s ease-out;
    }
  }
`;
