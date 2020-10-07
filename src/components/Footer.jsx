import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 2em;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  box-shadow: 0px -8px 10px -4px rgba(0, 0, 0, 0.5);

  position: absolute;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.body.darken(0.2)};

  & > span {
    font-family: Arial;
    font-size: 0.7em;
  }

  & > div {
    margin-left: auto;
    vertical-align: center;
  }

  img {
    height: 48px;
    float: left;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <span>
        CTA Hero Builder by [CVJ] Daenerys. Hit me on the official discord for issues and
        suggestions.
        <br />
        This tool is not affiliated with Godzi Lab. All heroes and assets belong to Godzi Lab and
        are taken from the game and community.
      </span>
      <div>{/*Discord | GitHub*/}</div>
    </FooterDiv>
  );
};

export default Footer;
