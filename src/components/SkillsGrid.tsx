import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import SkillCard from './SkillCard';

interface Props {
  skillsData: {
    [key: string]: {
      rank: number;
      level: number;
      xp: number;
    }
  }
}
const SkillsGrid = ({ skillsData }: Props) => {

  return (
    <Grid container spacing={1} style={{ width: '55%', marginTop:'1.5rem' }}>

 {Object.entries(skillsData).map(([skillName, skillData]) => (
  <>
  <SkillCard key={skillName} skill={{ name: skillName, data: skillData }} /> 
  </>
))}
 
    </Grid>
  );
};
export default SkillsGrid;