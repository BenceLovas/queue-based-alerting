import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  background: "#fff",
  backgroundLight: "rgb(255, 255, 255)",
  backgroundDark: "",
  border: '1px solid #e1e4e8',
  textColor: "#1c1e21",
  lightText: "rgba(0,0,0,.4)",
  divider: "rgba(133,133,133,0.2)",
  shadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
  main: "rgba(0,0,0,.4)",
  error: "rgb(240, 7, 7)",
  errorLight: "rgba(240, 7, 7, .3)",
  inputBorderColor: "rgb(220, 220, 220)",
  actionButton: {
    backgroundImage: "linear-gradient(top, #f7f7f7, #e7e7e7)",
    color: "#a7a7a7",
    boxShadow: "0px 3px 8px #aaa, inset 0px 2px 3px #fff",
    hover: {
      color: "#555",
      background: "#f5f5f5",
    },
  },
  input: {
    insetShadow: "inset 0px 3px 2px rgba(0,0,0,.1)",
  },
});

const darkTheme = createMuiTheme({
  background: "#303030",
  backgroundLight: "#414141",
  backgroundDark: "",
  border: '1px solid #e1e4e8',
  textColor: "rgba(255, 255, 255, 0.7)",
  lightText: "rgba(255,255,255,.5)",
  divider: "rgba(133,133,133,0.2)",
  shadow: "rgba(0, 0, 0, 0.4) 0px 1px 2px 0px",
  main: "rgba(255, 255, 255, 0.4)",
  error: "rgb(245, 0, 87)",
  errorLight: "rgba(245, 0, 87, .3)",
  inputBorderColor: "#303030",
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 0.7)",
    },
  },
  actionButton: {
    backgroundImage: "linear-gradient(top, #414141, #303030)",
    color: "#a7a7a7",
    boxShadow: "0px 3px 8px #141414, inset 0px 2px 3px #494949",
    hover: {
      color: "rgba(255, 255, 255, 0.7)",
      background: "#414141",
    },
  },
  input: {
    insetShadow: "inset 0px 3px 2px rgba(0,0,0,.2)",
  },
});

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <App theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Theme />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
