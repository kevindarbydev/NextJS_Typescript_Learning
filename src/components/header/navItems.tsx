import React from 'react';
import Link from 'next/link';


interface Props {
  margin: string;  
}
 
const NavItems: React.FC<Props> = ({ margin }) => {
  return (
    <>
    <Link href="/products">
  <div className='border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100' style={{ marginRight: margin }}>
    Products
  </div>
</Link>
<Link href="/CombatCalc">
  <div className='border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100' style={{ marginRight: margin }}>
        Combat Lvl Calculator
      </div>
      </Link>
      <Link href="/Lookup">
  <div className='border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100' style={{ marginRight: margin }}>
        Get HiScores
      </div>
      </Link>
    <Link href="/Leagues">
      <div className='border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100' style={{ marginRight: margin }}>
        Leagues HiScores
      </div>
      </Link>
    </>
  );
};

export default NavItems;
