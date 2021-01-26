import React from "react";
//ui
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TypoGraphy from '@material-ui/core/Typography'


const Header = () => {
  return (
    <>
    <AppBar
      color="primary"
      position="static"
    >
      <TypoGraphy
        variant="h5"
        component="h5"
      >
        Header
      </TypoGraphy>
    </AppBar>
    </>
  );
}

export default Header;
