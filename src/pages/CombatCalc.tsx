import { useState } from 'react';
import { NextPage } from 'next';
import Layout from '@/components/Layout';
import { Button, Input, Typography, InputLabel } from '@material-ui/core';
import CombatLevel from '@/components/CombatLevel';
import Router from 'next/router';


interface Props {
  title: string;
}
const CombatCalc: NextPage<Props> = () => {
   const [combatLevel, setCombatLevel] = useState<number | null>(null);
    const [hitpoints, setHitpoints] = useState<number>(0);
  const [defence, setDefence] = useState<number>(0);
  const [attack, setAttack] = useState<number>(0);
  const [strength, setStrength] = useState<number>(0);
  const [prayer, setPrayer] = useState<number>(0);
  const [magic, setMagic] = useState<number>(0);
  const [ranged, setRanged] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState('');


   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    if (
      isNaN(hitpoints) ||
      isNaN(defence) ||
      isNaN(attack) ||
      isNaN(strength) ||
      isNaN(prayer) ||
      isNaN(magic) ||
      isNaN(ranged)
    ) {
      setErrorMessage('All inputs must be integers');
    } else {
      const baseCombatLevel = Math.floor(
        (defence + hitpoints + Math.floor(prayer / 2)) / 4
      );
      const meleeCombatLevel =
        baseCombatLevel + Math.floor((attack + strength) * 0.325);
      const magicCombatLevel =
        baseCombatLevel + Math.floor((magic * 1.5 + magic / 2) * 0.325);
      const rangedCombatLevel =
        baseCombatLevel + Math.floor((ranged * 1.5 + ranged / 2) * 0.325);
      setCombatLevel(Math.max(meleeCombatLevel, magicCombatLevel, rangedCombatLevel));
    }
  };


  return (
    <>
      <Layout>
        <div className='flex flex-col text-center'>        
          <h2 className='text-2xl underline text-green-600 my-5'>Enter info below</h2>
  <form onSubmit={handleSubmit} >
            <InputLabel htmlFor='hitpoints'>
              Hitpoints:
              <Input
                type='number'
                name='hitpoints'
                id='hitpoints'
                value={hitpoints}
                onChange={(e) => setHitpoints(parseInt(e.target.value))}
              />
            </InputLabel>
            <InputLabel htmlFor='defence'>
              Defence:
              <Input
                type='number'
                name='defence'
                id='defence'
                value={defence}
                onChange={(e) => setDefence(parseInt(e.target.value))}
              />
            </InputLabel>
            <InputLabel htmlFor='attack'>
              Attack:
              <Input
                type='number'
                name='attack'
                id='attack'
                value={attack}
                onChange={(e) => setAttack(parseInt(e.target.value))}
              />
            </InputLabel>
            <InputLabel htmlFor='strength'>
              Strength:
              <Input
                type='number'
                name='strength'
                id='strength'
                value={strength}
                onChange={(e) => setStrength(parseInt(e.target.value))}
              />
            </InputLabel>
            <InputLabel htmlFor='prayer'>
              Prayer:
              <Input
                type='number'
                name='prayer'
                id='prayer'
                value={prayer}
                onChange={(e) => setPrayer(parseInt(e.target.value))}
              />
            </InputLabel>
             <InputLabel htmlFor='ranged'>
              Ranged:
              <Input
                type='number'
                name='ranged'
                id='ranged'
                value={ranged}
                onChange={(e) => setRanged(parseInt(e.target.value))}
              />
            </InputLabel>
             <InputLabel htmlFor='magic' className='mb-10'>
              Magic:
              <Input
                type='number'
                name='magic'
                id='magic'
                value={magic}
                onChange={(e) => setMagic(parseInt(e.target.value))}
              />
            </InputLabel>
            <div>
            <Button variant='outlined' className="w-50" type='submit'>Calculate Combat Level</Button>
            </div>
            {errorMessage && <Typography className='mt-2'>{errorMessage}</Typography>}
          </form>   
       <style jsx>{`
            form {
              display: flex;
              flex-direction: column;
            }
         
            label:not(:first-child) {
              margin-top: 1rem;
            }
          `}</style>
          { combatLevel && (
            <div>{combatLevel}</div>
          )}
        </div>
      </Layout>
    </>
  );
};


export default CombatCalc;

