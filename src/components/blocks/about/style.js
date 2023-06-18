import styled from 'styled-components';

export const AboutStyled = styled.section`
  display: flex;
  position: relative;
  min-height: 550px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  padding-left: 90px;
  background-color: ${(props) => props.theme.ColorAbout};
  align-items: center;
  z-index: 1;
  flex-direction: column;
  box-sizing: border-box;
`;

export const AboutTextStyled = styled.p`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;

export const AboutImageStyled = styled.img`
  position: absolute;
  bottom: 0;
  right: 90px;
  display: block;
  content: '';
  width: 446px;
  height: 563px;
  margin: auto;
`;
