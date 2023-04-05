import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight(21, 14)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.low};
`;

export const TableHead = styled.thead`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const TableRow = styled.tr`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.tableBorderColor};
  }
`;

export const TableHeadRow = styled(TableRow)`
  &::after {
    left: -50%;
    width: 200%;
  }
`;

export const TableHeadData = styled.th`
  padding: 14px 0;
  text-align: start;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  &:nth-child(1) {
    width: 20%;
  }

  &:nth-child(2) {
    width: 14%;
  }

  &:nth-child(3) {
    width: 18%;
  }

  &:nth-child(4) {
    width: 22%;
  }

  &:nth-child(5) {
    width: 16%;
  }

  &:nth-child(6) {
    width: 10%;
    text-align: center;
  }
`;

export const TableData = styled.td`
  padding: 20px 0;

  &:last-child {
    text-align: center;
  }
`;

export const Status = styled.p`
  display: inline-flex;
  justify-content: center;
  min-width: 80px;
  line-height: ${({ theme }) => theme.lineHeight(21, 14)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.low};
  padding: 3px 12px;
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
