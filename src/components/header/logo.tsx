 import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
}
 
const Logo: React.FC<Props> = ({title}) => {
    return (
 <div className="flex items-center flex-initial my-4 ml-8">
       <Image
        src="/first_logo.png"
        alt="Logo"
        width={120}
        height={120}
      />
      <h1 className="underline text-3xl ml-8">XP Gains Tracker</h1>
    </div>
    );
};
export default Logo;

