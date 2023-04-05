import styled from 'styled-components';
import searchIcon from 'assets/icons/search-icon.svg';

export const StyledFilter = styled.div`
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
