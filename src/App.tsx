import React, { FC } from "react";
import logo from "./logo.svg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    textAlign: "center",
  },
  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
  },
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  "@media (prefers-reduced-motion: no-preference)": {
    appLogo: {
      animation: "$App-logo-spin infinite 20s linear",
    },
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  appLink: {
    color: "#61dafb",
  },
});

const App: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
