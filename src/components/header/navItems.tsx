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

      <div className='border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100' style={{ marginRight: margin }}>
        Login
      </div>
    </>
  );
};

export default NavItems;
