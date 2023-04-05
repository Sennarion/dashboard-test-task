import styled from 'styled-components';
import searchIcon from 'assets/icons/search-icon.svg';

export const StyledSection = styled.section`
  width: 100%;
  padding: 40px;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
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

export const InputWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${searchIcon});
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Input = styled.input`
  padding: 10px;
  padding-left: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.inputTextColor};
  outline: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;
