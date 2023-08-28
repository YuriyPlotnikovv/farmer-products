import { DataList, DataTitle, DataDescription, DataWrapper } from './style';

export default function Characteristics({ characteristics }) {
  return (
    <DataList>
      {characteristics.map((characteristic) => (
        <DataWrapper key={characteristic.title}>
          <DataTitle>{characteristic.title}</DataTitle>&nbsp;
          <DataDescription>{characteristic.description}</DataDescription>
        </DataWrapper>
      ))}
    </DataList>
  );
}
