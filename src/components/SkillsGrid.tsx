import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    backgroundColor: 'lightgrey',
    width:'200px',
  },
  img:{
    float: 'left',
    marginTop:'2rem',
  }
 
}));

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
  const classes = useStyles();
// 
  return (
    <Grid container spacing={1} style={{ width: '65%', marginLeft:'1rem' }}>

      {Object.entries(skillsData).map(([skillName, skillData]) => (
        <Grid item xs={12} md={2} key={skillName}>
          <Paper className={classes.paper}>
        {skillName !== 'overall' && (
        <Image
          src={`/skill-icons/${skillName}_icon.png`}
          alt={`${skillName} icon`}
          width={50}
          height={80}
          className={classes.img}
        />
      )}
            <Typography variant="h6">{skillName}</Typography>
            <Typography variant="subtitle1">Rank: {skillData.rank}</Typography>
            <Typography variant="subtitle1">Level: {skillData.level}</Typography>
            <Typography variant="subtitle1">XP: {skillData.xp}</Typography>
            <ProgressBar xp={skillData.xp} level={skillData.level} />
          </Paper>
        </Grid>
      ))}
   
    </Grid>
  );
};
export default SkillsGrid;