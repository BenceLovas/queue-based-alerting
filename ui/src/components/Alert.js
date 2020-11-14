import React, { useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.background,
    border: 0,
    display: 'flex',
    borderRadius: 3,
    boxShadow: theme.shadow,
    margin: 5,
  },
  flag: {
    width: 50,
    height: 50,
    borderRadius: 5,
    boxShadow: theme.shadow,
  },
  date: {
    color: theme.textColor,
    fontSize: 30,
  }
}));

const dateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'}) 

const getDate = (date) => {
  const [{ value: month },,{ value: day },,{ value: hour },,{ value: minute }] = dateTimeFormat .formatToParts(date) 

  return [`${month.toUpperCase()} / ${day}`, `${hour}:${minute}`]
}

const Alert = ({ alert, color }) => {
  const classes = useStyles({});
  return (
    <div 
      className={classes.container} 
      key={alert.messageId}
    >
      <div className={classes.flag} style={{ background: color }}></div>
      <div className={classes.date}>{getDate(new Date(alert.timestamp))[0]} <strong>{getDate(new Date(alert.timestamp))[1]}</strong></div>
    </div>
  )
}

export default Alert;