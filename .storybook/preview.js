// .storybook/preview.js
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/themes';
import { fn } from '@storybook/test'; // fn関数のインポート

export const parameters = {
  actions: { onClick: fn() }, // 具体的なアクションを指定
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
