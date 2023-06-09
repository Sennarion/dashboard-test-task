import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Content = styled.div``;

export const Name = styled.p`
  line-height: ${({ theme }) => theme.lineHeight(21, 14)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.high};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: -3px;
`;

export const Position = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  line-height: ${({ theme }) => theme.lineHeight(18, 12)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.high};
  color: ${({ theme }) => theme.colors.userDescColor};
`;
