import {
  StyledSection,
  SectionHeader,
  HeaderText,
  SectionTitle,
  SectionDescription,
  InputWrapper,
  Input,
} from './Section.styled';

export default function Section() {
  return (
    <StyledSection>
      <SectionHeader>
        <HeaderText>
          <SectionTitle>All Customers</SectionTitle>
          <SectionDescription>Active Members</SectionDescription>
        </HeaderText>
        <InputWrapper>
          <Input placeholder="Search" />
        </InputWrapper>
      </SectionHeader>
    </StyledSection>
  );
}
