import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    backgroundColor: 'lightgrey',
    width:'170px',
  },
  img:{
    float: 'left',
    marginTop:'3rem',
  }
 
}));

interface Props {
  skill: {
    name: string;
    data: {
      rank: number;
      level: number;
      xp: number;
    };
  };
}

const SkillCard = ({ skill }: Props) => {
  const classes = useStyles();
// 
  return (
    <>             
          <Grid item xs={12} md={2} key={skill.name}>
            {skill.name !== 'overall' ? (
              <Paper className={classes.paper}>
                <Image
                  src={`/skill-icons/${skill.name}_icon.png`}
                  alt={`${skill.name} icon`}   
                  className={classes.img}               
                  width={26}
                  height={44}
                />
                <Typography variant="h6">{skill.name}</Typography>
                <Typography variant="subtitle1">Rank: {skill.data.rank}</Typography>
                <Typography variant="subtitle1">Level: {skill.data.level}</Typography>
                <Typography variant="subtitle1">XP: {skill.data.xp}</Typography>
                <ProgressBar xp={skill.data.xp} level={skill.data.level} />
              </Paper>
            ) : (
                <Paper className={classes.paper}>                
                <Typography variant="h6">{skill.name}</Typography>
                <Typography variant="subtitle1">Rank: {skill.data.rank}</Typography>
                <Typography variant="subtitle1">Level: {skill.data.level}</Typography>
                <Typography variant="subtitle1">XP: {skill.data.xp}</Typography>
              </Paper>
            )}
          </Grid>     
      </>
  );
};
export default SkillCard;



