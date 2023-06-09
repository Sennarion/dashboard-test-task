export const theme = Object.freeze({
  colors: {
    primary: '#5932EA',
    secondary: '#16C098',
    white: '#ffffff',
    black: '#000000',
    grey: '#838383',
    bgColor: '#FAFBFF',
    primaryTextColor: '#292D32',
    secondaryTextColor: '#B5B7C0',
    paginationTextColor: '#404B52',
    navTextColor: '#9197B3',
    inputColor: '#F9FBFF',
    inputTextColor: '#7E7E7E',
    userDescColor: '#757575',
    activeStatusColor: 'rgba(22, 192, 152, 0.38)',
    activeStatusBorderColor: '#00B087',
    inactiveStatusColor: '#FFC5C5',
    inactiveStatusBorderColor: '#DF0404',
    activeStatusTextColor: '#008767',
    tableBorderColor: '#EEEEEE',
    paginationButtonColor: '#F5F5F5',
  },
  fonts: {
    main: 'Poppins, sans-serif',
  },
  fontSizes: {
    min: '10px',
    tiny: '12px',
    small: '14px',
    medium: '22px',
    large: '24px',
    max: '26px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  lineHeight: (num1, num2) => num1 / num2,
  letterSpacing: {
    high: '0.01em',
    normal: '0em',
    low: '-0.01em',
  },
  animation: {
    cubicBezier: '0.2s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  media: {
    mobile: '480px',
    desktop: '1440px',
  },
  shadows: {
    primaryShadow: '0px 10px 60px rgba(226, 236, 249, 0.5)',
  },
});
