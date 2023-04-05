import { StyledFilter, Input } from './Filter.styled';

export default function Filter({ setFilter }) {
  return (
    <StyledFilter>
      <Input placeholder="Search" onChange={e => setFilter(e.target.value)} />
    </StyledFilter>
  );
}
