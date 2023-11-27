import { useState, useEffect, FormEvent } from 'react';
import { NextPage } from 'next';
import { TextField, Button, Grid, Typography, Input } from '@material-ui/core';
import Layout from '@/components/Layout';
import SkillsGrid from '@/components/SkillsGrid';

interface Props {
  title: string;
}
interface Bosses {
  [key: string]: {
    rank: number;
    kills: number;
  };
}
const Lookup: NextPage<Props> = () => {
      const [rsn, setRsn] = useState('');
     const [playerData, setPlayerData] = useState(null);
     const [bossKc, setBossKc] = useState(null);


     const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
     }
   const handleLookup = async () => {
    try {
      const response = await fetch(`/api/hiscores?rsn=${rsn}`);
      const data = await response.json();
      
      if (!data){
        console.log("Response failed!");
        return;
      }
      console.log(data.overall);
      //setPlayerData(data.main.skills);      

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        <div className='flex flex-col items-center mt-2'>      
        <Typography variant="h5" className='underline text-blue-600'>Enter your RSN below</Typography>  
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
          id='outlined-basic'
          label='RSN'
          variant='outlined'
          style={{ width: '180px', margin: '1rem 0', display:'flex' }}
          value={rsn}
          onChange={(event) => setRsn(event.target.value)}
        />
        <Button variant="contained" onClick={handleLookup} type='submit'>Lookup stats </Button>
        </form>
      <div className='w-full flex'>
            {playerData && (
              <>
                <SkillsGrid skillsData={playerData} />            
              </>
            )}
        </div>
        </div>
      </Layout>
    </>
  );
};


export default Lookup;

