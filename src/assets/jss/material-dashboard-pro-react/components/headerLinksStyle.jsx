// ##############################
// // // HeaderLinks styles
// #############################

import {
  defaultFont,
  dangerColor,
  primaryColor,
  primaryBoxShadow
} from "assets/jss/material-dashboard-pro-react.jsx";

const headerLinksStyle = theme => ({
  popperClose: {
    pointerEvents: "none"
  },
  search: {
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "10px 15px",
      width: "auto"
    }
  },
  searchInput: {
    paddingTop: "2px"
  },
  searchRTL: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "18px !important"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "12px"
    }
  },
  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0!important"
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      marginLeft: "30px",
      width: "auto"
    }
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "38px",
      float: "right"
    }
  },
  top: {
    zIndex: "4"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: "inherit",
      opacity: "0.8",
      marginRight: "16px",
      marginLeft: "-5px"
    }
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "5px",
      border: "1px solid #FFF",
      right: "10px",
      fontSize: "9px",
      background: dangerColor,
      color: "#FFFFFF",
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "14px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px"
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box"
  },
  pooperResponsive: {
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: {
    ...defaultFont,
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "fit-content",
    color: "#333",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      ...primaryBoxShadow
    }
  },
  dropdownItemRTL: {
    textAlign: "right !important"
  },
  wrapperRTL: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "16px"
    }
  },
  buttonLinkRTL: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "flex-end",
      width: "-webkit-fill-available",
      margin: "10px 15px 0",
      padding: "10px 15px",
      display: "block",
      position: "relative",
    }
  },
  labelRTL: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
      justifyContent: "initial",
    }
  },
  linksRTL: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "-5px",
      marginLeft: "16px",
    }
  },
  managerClasses: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block"
    }
  }
});

export default headerLinksStyle;
