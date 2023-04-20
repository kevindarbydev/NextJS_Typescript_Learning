import React from 'react';

interface CombatLevelProps {
  attack: number;
  strength: number;
  defence: number;
  hitpoints: number;
  prayer: number;
  magic: number;
  ranged: number;
}

function calculateMeleeCombatLevel(attack: number, strength: number, defence: number, hitpoints: number, prayer: number): number {
  const baseCombatLevel = Math.floor((hitpoints + defence + Math.floor(prayer / 2)) / 4);
  const meleeCombatLevel = baseCombatLevel + Math.floor((attack + strength) * 0.325);
  return meleeCombatLevel;
}

function calculateMagicCombatLevel(baseCombatLevel: number, magic: number): number {
  const magicCombatLevel = baseCombatLevel + Math.floor((magic / 2) + magic) * 0.325;
  return magicCombatLevel;
}

function calculateRangedCombatLevel(baseCombatLevel: number, ranged: number): number {
  const rangedCombatLevel = baseCombatLevel + Math.floor((ranged / 2) + ranged) * 0.325;
  return rangedCombatLevel;
}

function CombatLevel(props: CombatLevelProps) {
  const { attack, strength, defence, hitpoints, prayer, magic, ranged } = props;
  const baseCombatLevel = Math.floor((hitpoints + defence + Math.floor(prayer / 2)) / 4);
  let combatLevel;

  if (ranged && magic > (attack + strength)) {
    combatLevel = calculateRangedCombatLevel(baseCombatLevel, ranged);
  } else {
    combatLevel = calculateMeleeCombatLevel(attack, strength, defence, hitpoints, prayer);
    if (magic > (attack + strength) && magic > ranged) {
      combatLevel = calculateMagicCombatLevel(baseCombatLevel, magic);
    }
  }

  return (
    <div>
      <p>Your combat level is: {combatLevel}</p>
    </div>
  );
}

export default CombatLevel;
