import styled, { keyframes } from "styled-components";
import c from "../misc/colors";
import Select from "react-select";

export const Panel = styled.div`
  background-color: ${c.baseBrown.darken(0.2).hex()};
  height: 100%;
  margin-bottom: 0.4em;
  border-radius: 5px;
  border-color: ${c.baseBrown.darken(0.5).hex()};
  border-width: 2px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px black solid;
  text-align: center;
  font-family: Avenir;
  color: white;
  font-size: 25px;
  background-color: ${c.baseBrown.darken(0.1).hex()};
`;

export const Table = styled.table`
  margin: 1em 2em;
  
  th {
    font-family: Avenir;
    color: white;
  }
`;

export const Inputs = styled.tr`
  height: 35px;
  width: 100%;
  margin-bottom: 0.3em;

  input {
    width: 35px;
    height: 35px;
    background: ${c.baseBrown.hex()};
    border: none;
    color: white;
    text-align: center;
    caret-color: transparent;
    cursor: pointer;
    font-family: Avenir;

    &:focus {
      outline-color: white;
      outline-style: solid;
      outline-width: 1px;
    }
  }

  img {
    height: 20px;
    margin: auto;
  }
`;

export const SelectStyle = {
  dropdownIndicator: () => ({
    display: "none",
  }),
  control: (styles) => ({
    ...styles,
    width: 35,
    height: 35,
    background: c.baseBrown.hex(),
    border: "none",
    margin: "auto",
    minHeight: "unset",
  }),
  valueContainer: (styles) => ({
    padding: 0,
  }),
  singleValue: (styles) => ({
    ...styles,
    maxWidth: "unset",
    margin: 0,
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "white",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
  menuList: (styles) => ({
    ...styles,
    scrollbarWidth: "none",
    padding: "0.1em",
  }),
  option: (styles) => ({
    ...styles,
    padding: 0,
    marginBottom: "0.1em",
  }),
};

export const StyledSelect = styled(Select)`
  *::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const ClearButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: Avenir;
  color: red;
`;

const WeaponAnim = keyframes`
  50% {
    transform: translateY(-0.8%);
  }
`;

export const WeaponDiv = styled.div`
  flex-grow: 1;
  display: flex;

  img {
    margin: auto;
    animation: ${WeaponAnim} 5s ease-in-out infinite;
  }
`;
