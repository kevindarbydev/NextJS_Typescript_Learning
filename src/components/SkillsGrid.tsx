import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    width:'240px',
  },
 
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

  const getSkillIconPath = (skillName: string) => {
    return `${process.env.PUBLIC_URL}/skill-icons/${skillName}_icon.png`;
  };
  return (
    <Grid container spacing={1}>
      {Object.entries(skillsData).map(([skillName, skillData]) => (
        <Grid item xs={12} sm={3} key={skillName}>
          <Paper className={classes.paper}>
        {skillName !== 'overall' && (
        <Image
          src={`/skill-icons/${skillName}_icon.png`}
          alt={`${skillName} icon`}
          width={50}
          height={80}
        />
      )}
            <Typography variant="h6">{skillName}</Typography>
            <Typography variant="subtitle1">Rank: {skillData.rank}</Typography>
            <Typography variant="subtitle1">Level: {skillData.level}</Typography>
            <Typography variant="subtitle1">XP: {skillData.xp}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
export default SkillsGrid;