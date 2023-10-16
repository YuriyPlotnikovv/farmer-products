import styled from 'styled-components';
import Title from '/src/components/ui/title/title';

export const TabList = styled.div`
  display: flex;
  gap: 10px;
  margin: 16px 0 16px 0;
`;

export const TabButton = styled.button`
  display: block;
  padding: 8px 12px;

  background-color: ${(props) => (props.active ? '#88aa4d' : '#f6f6f6')};
  border: 1px solid rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

export const TabText = styled(Title)`
  margin: 0;
  padding: 0;

  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.active ? '#ffffff' : '#000000')};
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  line-height: 150%;
`;
