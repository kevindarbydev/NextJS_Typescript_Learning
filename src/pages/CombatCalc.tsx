import { useState } from 'react';
import { NextPage } from 'next';
import Layout from '@/components/Layout';
import { Button } from '@material-ui/core';
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
          <h2 className='text-2xl underline text-green-600 mb-5'>Enter info below</h2>
  <form onSubmit={handleSubmit}>
            <label htmlFor='hitpoints'>
              Hitpoints:
              <input
                type='number'
                name='hitpoints'
                id='hitpoints'
                value={hitpoints}
                onChange={(e) => setHitpoints(parseInt(e.target.value))}
              />
            </label>
            <label htmlFor='defence'>
              Defence:
              <input
                type='number'
                name='defence'
                id='defence'
                value={defence}
                onChange={(e) => setDefence(parseInt(e.target.value))}
              />
            </label>
            <label htmlFor='attack'>
              Attack:
              <input
                type='number'
                name='attack'
                id='attack'
                value={attack}
                onChange={(e) => setAttack(parseInt(e.target.value))}
              />
            </label>
            <label htmlFor='strength'>
              Strength:
              <input
                type='number'
                name='strength'
                id='strength'
                value={strength}
                onChange={(e) => setStrength(parseInt(e.target.value))}
              />
            </label>
            <label htmlFor='prayer'>
              Prayer:
              <input
                type='number'
                name='prayer'
                id='prayer'
                value={prayer}
                onChange={(e) => setPrayer(parseInt(e.target.value))}
              />
            </label>
             <label htmlFor='ranged'>
              Ranged:
              <input
                type='number'
                name='ranged'
                id='ranged'
                value={ranged}
                onChange={(e) => setRanged(parseInt(e.target.value))}
              />
            </label>
             <label htmlFor='magic' className='mb-10'>
              Magic:
              <input
                type='number'
                name='magic'
                id='magic'
                value={magic}
                onChange={(e) => setMagic(parseInt(e.target.value))}
              />
            </label>
            <button type='submit'>Calculate Combat Level</button>
            {errorMessage && <p>{errorMessage}</p>}
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

