import styled from 'styled-components';
import searchIcon from 'assets/icons/search-icon.svg';

export const StyledFilter = styled.div`
  position: relative;
  width: 100%;
  max-width: 216px;

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

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-right: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.inputColor};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight(18, 12)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.low};
  color: ${({ theme }) => theme.colors.inputTextColor};
  outline: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;
