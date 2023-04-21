import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';

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
type BossData = {
  [key: string]: {
    kills: number;
    rank: number;
  }
}

interface Props {
  bossData: BossData;
}

const BossGrid = ({ bossData }: Props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} style={{ width: '25%', marginLeft:'1rem' }}>
      {Object.entries(bossData).map(([bossName, bossData], index) => (
        <Grid item xs={12} sm={6} key={bossName}>
          <Paper className={classes.paper}>
            {/* <Image
              src={`/boss-icons/${bossName}_icon.png`}
              alt={`${bossName} icon`}
              width={80}
              height={80}
              className={classes.img}
            /> */}
            <Typography variant="h6">{bossName}</Typography>
            <Typography variant="subtitle1">Kills: {bossData.kills}</Typography>
            <Typography variant="subtitle1">Rank: {bossData.rank}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BossGrid;
