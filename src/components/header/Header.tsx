import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import NavItems from './navItems';

interface Props {
  margin: string;
  title: string;
}

const Header: React.FC<Props> = ({ margin, title }) => {
  return (
    <div style={{ backgroundColor: "rgba(51, 51, 51, 0.4)" }}>
      <nav className="flex flex-row items-center justify-between flex-1">
        <Link href="/">
          
            <Logo title={title}/>
         
        </Link>
        <div className="flex-auto flex flex-row justify-center my-4">
          <NavItems margin={margin} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
