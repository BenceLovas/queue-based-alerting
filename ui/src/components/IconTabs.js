import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HistoryIcon from '@material-ui/icons/History';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';

const menuItems = ['ADD', 'HISTORY', 'FEED']

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.textColor,
    background: theme.background,
    boxShadow: theme.shadow,
  },
  indicator: {
    height: 8,
  }
}));

export default function IconTabs({currentPage,setCurrentPage}) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setCurrentPage(newValue);
  }

  return (
    <div>
      <Tabs
        value={currentPage}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="icon tabs example"
        classes={{
          indicator: classes.indicator,
        }}
      >
        <Tab className={classes.button} icon={<AddIcon fontSize='large'/> } aria-label="add" />
        <Tab className={classes.button} icon={<HistoryIcon fontSize='large'/>} aria-label="history" />
        <Tab className={classes.button} icon={<NotificationsIcon fontSize='large'/>} aria-label="alerts" />
      </Tabs>
    </div>
  );
}