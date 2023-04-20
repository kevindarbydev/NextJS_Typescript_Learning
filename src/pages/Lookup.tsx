import { useState } from 'react';
import { NextPage } from 'next';
import { TextField, Button } from '@material-ui/core';
import Layout from '@/components/Layout';
import SkillsGrid from '@/components/SkillsGrid';



interface Props {
  title: string;
}
const Lookup: NextPage<Props> = () => {
      const [rsn, setRsn] = useState('');
     const [playerData, setPlayerData] = useState(null);

 const handleLookup = async () => {
    try {
      const response = await fetch(`/api/hiscores?rsn=${rsn}`);
      const data = await response.json();
      console.log(data);
      setPlayerData(data.main.skills);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        <div className='flex flex-col items-center'>      
        <h1>Enter your RSN below</h1>  
          <TextField
          id='outlined-basic'
          label='RSN'
          variant='outlined'
          style={{ width: '180px', margin: '1rem 0' }}
          value={rsn}
          onChange={(event) => setRsn(event.target.value)}
        />
        <Button variant="contained" value="Lookup" onClick={handleLookup}>Lookup stats </Button>
          {playerData && (
        <SkillsGrid skillsData={playerData} />
      )}
        </div>
      </Layout>
    </>
  );
};


export default Lookup;

