import { useState } from 'react';
import { Table, Filter } from 'components';
import {
  StyledSection,
  SectionHeader,
  HeaderText,
  SectionTitle,
  SectionDescription,
  SectionFooter,
  FooterText,
  PaginationList,
  PaginationItem,
} from './Section.styled';
import { customers } from 'data/customers';

export default function Section() {
  const [filter, setFilter] = useState('');

  const filteredCustomers = customers.filter(customer =>
    Object.values(customer).some(field =>
      field.toLowerCase().includes(filter.trim().toLowerCase())
    )
  );

  return (
    <StyledSection>
      <SectionHeader>
        <HeaderText>
          <SectionTitle>All Customers</SectionTitle>
          <SectionDescription>Active Members</SectionDescription>
        </HeaderText>
        <Filter setFilter={setFilter} />
      </SectionHeader>
      <Table customers={filteredCustomers} />
      <SectionFooter>
        <FooterText>Showing data 1 to 8 of 256K entries</FooterText>
        <PaginationList>
          <PaginationItem></PaginationItem>
        </PaginationList>
      </SectionFooter>
    </StyledSection>
  );
}
