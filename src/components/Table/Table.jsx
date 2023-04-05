import {
  StyledTable,
  TableHead,
  TableHeadRow,
  TableRow,
  TableHeadData,
  TableData,
  Status,
} from './Table.styled';

export default function Table({ customers }) {
  const fields = [
    'Customer Name',
    'Company',
    'Phone Number',
    'Email',
    'Country',
    'Status',
  ];

  return (
    <>
      <StyledTable>
        <TableHead>
          <TableHeadRow>
            {fields.map(field => (
              <TableHeadData key={field}>{field}</TableHeadData>
            ))}
          </TableHeadRow>
        </TableHead>
        <tbody>
          {customers.map(({ name, company, phone, email, country, status }) => {
            return (
              <TableRow key={name}>
                <TableData>{name}</TableData>
                <TableData>{company}</TableData>
                <TableData>{phone}</TableData>
                <TableData>{email}</TableData>
                <TableData>{country}</TableData>
                <TableData>
                  <Status isActive={status === 'Active'}>{status}</Status>
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
}
