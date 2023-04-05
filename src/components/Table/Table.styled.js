import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 32px;
`;

export const TableHead = styled.thead`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const TableHeadRow = styled.tr`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -50%;
    display: block;
    width: 200%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.tableBorderColor};
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tableBorderColor};
`;

export const TableHeadData = styled.th`
  padding: 24px 0;
  text-align: start;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  &:last-child {
    text-align: center;
  }
`;

export const TableData = styled.td`
  padding: 24px 0;
`;

export const Status = styled.p`
  display: flex;
  justify-content: center;
  min-width: 80px;
  padding: 4px 12px;
  border: 1px solid;
  border-radius: 4px;
  background-color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.activeStatusColor
      : theme.colors.inactiveStatusColor};
  border-color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.activeStatusBorderColor
      : theme.colors.inactiveStatusBorderColor};
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.activeStatusTextColor
      : theme.colors.inactiveStatusBorderColor};
`;
