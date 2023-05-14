import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

interface Props {
  xp: number;
  level: number;
}

const ProgressBar = ({ xp, level }: Props) => {
  const classes = useStyles();
  const xpTNL = [0, 83, 174, 276, 388, 512, 650, 801, 969, 1154, 1358, 1584, 1833,
     2107, 2411, 2746, 3115, 3523, 3973, 4470, 5018, 5624, 6291, 7028, 7842, 8740, 9730, 
    10824, 12031, 13363, 14833, 16456, 18247, 20224, 22406, 24815, 27473, 30408,
    33648, 37224, 41171, 45529, 50339, 55649, 61512, 67983, 75127, 83014, 91721, 101333, 
    111945, 123660, 136594, 150872, 166636, 184040, 203254, 224466, 247886, 273742, 
    302288, 333804, 368599, 407015, 449428, 496254, 547953, 605032, 668051, 737627, 
    814445, 899257, 992895, 1096278, 1210421, 1336443, 1475581, 1629200,   1798808,
     1986068, 2192818, 2421087, 2673114, 2951373, 3258594, 3597792, 3972294, 4385776,  
      4842295,  5346332, 5902831, 6517253, 7195629, 7944614, 8771558, 9684577, 10692629, 11805606, 13034431];
  const xpTNLIndex = level < xpTNL.length ? level : xpTNL.length - 1;
  const xpToNextLevel = xpTNL[xpTNLIndex] - xp;
const progressBarValue = level === 99 ? 100 : 100 - (xpToNextLevel / (xpTNL[xpTNLIndex] - xpTNL[xpTNLIndex - 1])) * 100;
  return (
    <div className={classes.root}>
     
     <span style={{ height: '42px', display: 'block', textAlign:'center' }}>
      { level !== 99 ? (
        <>     
        <Typography variant="subtitle1" style={{fontSize:'15px', marginTop:'1.5rem'}}>{xpToNextLevel} XP to {level + 1}</Typography>
          <LinearProgress variant="determinate"  value={progressBarValue} />
           <Typography variant="subtitle1" className='opacity-50 text-center text-sm'>{parseInt(progressBarValue.toFixed(0))}%</Typography>
          </>
      ) : (
        <Typography variant='subtitle1' style={{marginTop:'1.76rem'}}>Level 99! 🎉 </Typography>
      )}
    </span>
     
     
      
    </div>
  );
};

export default ProgressBar;
