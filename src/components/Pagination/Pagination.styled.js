import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const PaginationItem = styled.li`
  &:nth-child(5) {
    position: relative;
    padding-right: 22px;

    &:after {
      position: absolute;
      content: '...';
      bottom: 0;
      right: 0;
    }
  }
`;

export const PaginationButton = styled.button`
  min-width: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.paginationButtonColor};
  border: 1px solid ${({ theme }) => theme.colors.tableBorderColor};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  line-height: 100%;
  color: ${({ theme }) => theme.colors.paginationTextColor};
  padding: 5px;
  cursor: pointer;
`;

export const PaginationPageButton = styled(PaginationButton)`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.paginationButtonColor};
  border-color: ${({ theme, isActive }) =>
    isActive ? 'transparent' : theme.tableBorderColor};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.paginationTextColor};
`;
