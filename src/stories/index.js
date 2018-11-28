import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { ThemeProvider } from 'styled-components';
import theme from './../themes/default';
import './../index.css';

import { Badge, Button } from './../component/atoms';
import QuickAlert from './../component/molecules/quick_alert';

storiesOf('Badge', module).add('Navigation badge', () => (
  <ThemeProvider theme={theme}>
    <Badge isActive={10}>11</Badge>
  </ThemeProvider>
));

storiesOf('QuickAlert', module).add('Quick Alert ', () => (
  <ThemeProvider theme={theme}>
    <QuickAlert
      children="Quick Alert Mass"
      isActive={true}
      onClick={() => this.setState({ isActive: false })}
    />
  </ThemeProvider>
));

storiesOf('Buttons', module).add('Button ', () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <div style={{ padding: '10px' }}>
        <Button transparent buttonType="primary" size="large">
          BUTTON
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button colorful buttonType="primary" size="large">
          BUTTON
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button colorful buttonType="info" size="small" block>
          BUTTON
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button colorful buttonType="success" size="large" block>
          BUTTON
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button colorful buttonType="danger" size="large" block>
          BUTTON
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button size="large" block>
          BUTTON
        </Button>
      </div>
    </React.Fragment>
  </ThemeProvider>
));
