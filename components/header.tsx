import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({title = "Excusr", children}: {title?: string, children?: React.ReactNode}) => (
  <Appbar.Header>
    <Appbar.Content title={title} />
    {children}
  </Appbar.Header>
);

export default Header;