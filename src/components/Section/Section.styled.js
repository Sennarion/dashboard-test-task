import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  padding: 40px;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.div``;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 7px;
`;

export const SectionDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SectionFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const PaginationList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const PaginationItem = styled.li``;
