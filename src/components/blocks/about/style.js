import styled from 'styled-components';

export const AboutStyled = styled.section`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  min-height: 550px;
  padding: 183px 553px 145px 90px;
  align-items: center;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.ColorAbout};
`;

export const AboutTextStyled = styled.p`
  max-width: 650px;
  margin-top: 24px;
  margin-bottom: 40px;
  padding-right: 116px;
  box-sizing: border-box;
`;

export const AboutImageStyled = styled.img`
  position: absolute;
  right: 90px;
  bottom: 0;

  display: block;
  width: 446px;
  height: 563px;
  margin: auto;

  content: '';
`;
