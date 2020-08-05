import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ShopItem(props) {
  console.log(props);

  return (
    <div className='classes.root' >
      <List component="nav" aria-label="main mailbox folders" style={{display: "inline-flex", height: "150px", alignItems: 'center'}}>
      <div>
        <img src={props.card.img} style={{height: "150px"}} />
      </div>
      <h1>{props.card.name}</h1>
      <p>{props.card.color}</p>

      <div>{props.card.price}</div>
      <div>
        <button>ADD to CART</button>
      </div>
      </List>
    </div>
  );
}

export default ShopItem;
