import styled from 'styled-components';

export const CustomersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    display: none;
  }
`;

export const CustomerItem = styled.li`
  padding: 0 14px;
  background-color: ${({ theme }) => theme.colors.secondaryTextColor};
  border-radius: 10px;
`;

export const CustomerInfoList = styled.ul``;

export const CustomerInfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const Label = styled.p``;

export const Info = styled.p``;

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
