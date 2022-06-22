import { create } from '@storybook/theming';
import ClarkeLogo from './public/logotipo-clarke.svg';

export default create({
  base: 'light',
  brandTitle: 'Clarke Energia',
  brandUrl: 'https://clarke.com.br/',
  brandImage: ClarkeLogo,
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  appBg: '#F1FFEB',
  barBg: '#00DF7C',
  barTextColor: 'black',
  colorSecondary: '#008C4C',
});
