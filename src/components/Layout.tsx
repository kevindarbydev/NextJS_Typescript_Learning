import React from 'react';
import Header from './header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header margin='4rem' title='Learning Next + Typescript' />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
