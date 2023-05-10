import styled from "styled-components";
import colors from "styles/colors";
import { convertPxToRem } from "utils";

const { greey, mainBlue, white, black } = colors;

export const StyledNav = styled.div`
  padding: ${convertPxToRem(15)} ${convertPxToRem(30)};
  border-bottom: 1px solid ${greey};

  .logo {
    width: ${convertPxToRem(120)};
    max-height: ${convertPxToRem(35)};
    svg {
      width: 100%;
    }
  }

  .nav__list-item {
    font-size: ${convertPxToRem(16)};
    text-transform: capitalize;
    margin-right: ${convertPxToRem(15)};
    &:last-child {
      margin-right: 0;
    }
  }

  .nav__bars {
    display: none;
  }

  .nav__bars-close {
    display: none;
  }

  .nav__list-item--active a {
    color: ${mainBlue};
  }

  .nav__avatar {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }
  .nav__avatar-icon {
    margin-left: ${convertPxToRem(5)};
  }

  @media (max-width: 570px) {
    & {
      padding: ${convertPxToRem(15)} 0;
    }

    .logo {
      width: ${convertPxToRem(80)};
    }
  }
  @media (max-width: 465px) {
    .nav__list {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      transform: translateX(-200%);
      background: ${mainBlue};
      z-index: 99;
      width: 100%;
      padding: ${convertPxToRem(20)};
      transition: 0.3s;
    }

    .nav__list-wrapper {
      flex-direction: column !important;
    }

    .nav__list-item a {
      color: ${greey};
    }
    .nav__list-item {
      margin-bottom: ${convertPxToRem(15)};
    }

    .nav__list-item--active a {
      color: ${white};
    }

    .nav__bars-close,
    .nav__bars {
      display: block;
      background: transparent;
      border: transparent;
      width: ${convertPxToRem(25)};
    }

    .nav__bars-close {
      color: ${white};
      width: ${convertPxToRem(35)};
      margin-left: auto;
    }

    .nav__list--visible {
      transform: translateX(0);
    }
  }
`;

export const StyledDropdownItem = styled.div`
  padding: ${convertPxToRem(5)} 0;

  .btn {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .text {
    margin-left: ${convertPxToRem(10)};
    margin-bottom: 0;
    color: ${black};
  }
`;
