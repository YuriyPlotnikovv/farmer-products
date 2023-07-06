import { DataList, DataTitle, DataDescription, DataWrapper } from './style';

export default function Properties({ properties }) {
  return (
    <DataList>
      {properties.map((property) => (
        <DataWrapper>
          <DataTitle>{property.title}</DataTitle>&nbsp;
          <DataDescription>{property.description}</DataDescription>
        </DataWrapper>
      ))}
    </DataList>
  );
}
