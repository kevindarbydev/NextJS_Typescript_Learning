import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { TextField, Button, Grid } from '@material-ui/core';
import Layout from '@/components/Layout';
import SkillsGrid from '@/components/SkillsGrid';
import BossGrid from '@/components/BossGrid';



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

   const handleLookup = async () => {
    try {
      const response = await fetch(`/api/hiscores?rsn=${rsn}`);
      const data = await response.json();
 

      setPlayerData(data.main.skills);
      setBossKc(data.main.bosses)

      // Save the playerData to localStorage
      const trackedPlayers = JSON.parse(localStorage.getItem('trackedPlayers') || '{}');
      trackedPlayers[rsn] = trackedPlayers[rsn] || [];
      trackedPlayers[rsn].push(data.main.skills);
      localStorage.setItem('trackedPlayers', JSON.stringify(trackedPlayers));
    } catch (error) {
      console.error(error);
    }
  };
    // Retrieve the playerData from localStorage when the component mounts
  useEffect(() => {
    const trackedPlayers = JSON.parse(localStorage.getItem('trackedPlayers') || '{}');
    const playerData = trackedPlayers[rsn];
    if (playerData && playerData.length > 0) {
      setPlayerData(playerData[playerData.length - 1]);
    }
  }, []);

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
        <Button variant="contained" value="Lookup" className="mb-4" style={{marginBottom:'2rem'}} onClick={handleLookup}>Lookup stats </Button>
      <div className='w-full flex'>
            {playerData && (
              <>
                <SkillsGrid skillsData={playerData} />
                <Grid style={{ width: '5%' }}/>
                {/* <BossGrid bossData={bossKc} /> */}
              </>
            )}
        </div>
        </div>
      </Layout>
    </>
  );
};


export default Lookup;

