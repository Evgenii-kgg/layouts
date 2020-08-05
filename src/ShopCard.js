
import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function ShopCard(props) {
  console.log(props.card);
  
  return (
    <Card className= 'classes.root'  style={{maxWidth: '345px'}}>
      <Typography gutterBottom variant="h5" component="h2">{props.card.name}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">{props.card.color} </Typography>
  <div>
  <div style={{display: 'flex', justifyContent: 'center'}}>
   < img style={{height: '100px'}} src={props.card.img} />
   </div>
  </div>
  <CardActions>
    {props.card.price} 
    <Button>ADD to CART</Button>
    </CardActions>
    </Card>
  )
}

export default ShopCard;
