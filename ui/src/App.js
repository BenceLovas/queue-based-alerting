import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from './components/Alert';
import IconTabs from './components/IconTabs';
import { animated, useSpring, config } from "react-spring"
const colors = ['#5CC959','#ffbb00','#ddd','#FC3471']

const useStyles = makeStyles((theme) => ({
  container: {
    height: 'calc(100vh - 90px)', display: 'flex',
  },
  bottomNavigation: {
    width: '100%',
    height: 90,
    background: theme.background,
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  alertsContainer: {
    background: theme.background,
    flex: '1 0 auto',
    flexDirection: 'column',
    overflowY: 'scroll'
  },
}));

function App() {
  const classes = useStyles();
  const [alerts, setAlerts] = useState([]);
  const websocket = useRef(null);
  const [currentPage, setCurrentPage] = useState(2);
  const scrolledDiv = useRef(null);

  useEffect(() => {
    websocket.current = new WebSocket('ws://localhost:8000/')
    websocket.current.onopen = () => {
        websocket.current.send('Hi this is web client.');
    };
    websocket.current.onmessage = (e) => {
      const newAlert = JSON.parse(e.data);
      setAlerts(alerts => [...alerts, newAlert])
    }

    return () => {
      websocket.current.close()
    };
  }, [])

  useEffect(() => {
    if (currentPage === 2) {
      scrolledDiv.current.scrollTop = scrolledDiv.current.scrollHeight;
    }
  }, [alerts])

  return (
    <div className={classes.container}>
    {currentPage === 0 ? (
        <div className={classes.alertsContainer} >
          <div>ADD</div>
        </div>
       ) : null
      }
      {currentPage === 1 ? (
        <div className={classes.alertsContainer} >
          <div>HISTORY</div>
        </div>
       ) : null
      }
      {currentPage === 2 ? (
        <div className={classes.alertsContainer} ref={scrolledDiv}>
          {alerts.map((alert) => {
            const percentage = parseInt(alert.value)
            const color = colors[Math.floor(percentage / (100 / colors.length))] || colors[colors.length - 1]
            return (
              <Alert alert={alert} color={color}/>
            )
          })}
        </div>
        ) : null
    }
      <div className={classes.bottomNavigation}>
        <IconTabs currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}

export default App;
