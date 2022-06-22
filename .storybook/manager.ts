import { addons } from '@storybook/addons';
import clarkeTheme from './ClarkeTheme';
import favicon from './public/favicon.ico';

addons.setConfig({
  theme: clarkeTheme,
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);
