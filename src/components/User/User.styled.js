import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Content = styled.div``;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
`;

export const Position = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  color: ${({ theme }) => theme.colors.userDescColor};
`;
