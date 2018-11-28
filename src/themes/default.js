import { reversePalette } from 'styled-theme/composer';

const theme = {};

theme.palette = {
  primary: ['#ff324d', '#1976d2', '#2196f3', '#ff4242', '#ff6868'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#DB2828', '#fdf7f7', 'rgba(221,51,51,0.76)'],
  warning: ['#fcf8f2', 'rgba(255,171,0,0.65)'],
  success: ['#4caf50', '#21BA45', '#F4FDF0', 'rgba(7,219,95,0.92)'],
  info: ['#1976d2', '#2196f3', '#f4f8fa', 'rgba(41,121,255,0.93)'],
  white: ['#FAFAFA', '#FFFFFF', '#EEEEEE'],
  grayscale: [
    '#F4f4f4',
    '#CCCCCC',
    '#919193',
    '#4f4f4f',
    '#979797',
    '#6A6A6A',
    '#555555',
    '#97979777',
  ],

  weight: ['100i', '300', '400', '400i', '500', '600', '700', '900'],
  rgbascale: ['rgba(255,192,182,0.1)', 'rgba(255, 95,88 ,0.1)'],
  size: [
    '10px',
    '11px',
    '12px',
    '13px',
    '14px',
    '16px',
    '18px',
    '20px',
    '22px',
    '24px',
    '26px',
    '28px',
    '30px',
  ],
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  // primary: "Montserrat"
  primary: 'IBM Plex Sans, sans-serif',
};

theme.sizes = {
  maxWidth: '1100px',
};

export default theme;

// ecf1f8
