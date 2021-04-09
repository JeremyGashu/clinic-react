import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea style={{display : 'flex', justifyContent:'center', alignItems : 'center', flexDirection:'column'}}>
      <i class="material-icons" style={{color : '#3d5afe', fontSize : '100px'}}>#</i>
        {/* <AttachMoneyIcon m style={{fontSize:'100px', color:'#3d5afe', alignSelf:'center'}} /> */}
        <CardContent style={{display : 'flex', justifyContent:'center', alignItems : 'center', flexDirection:'column'}}>
          <Typography gutterBottom variant="h5" component="h2" style={{color : 'grey'}}>
            Number of customers
          </Typography>
          <Typography gutterBottom variant="h3" component="h2">
            20
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}

export default ImgMediaCard