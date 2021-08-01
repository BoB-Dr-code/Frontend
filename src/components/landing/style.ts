import { createStyles, makeStyles } from "@material-ui/core";

export const challengeSetStyles = makeStyles(() =>
  createStyles({
    challengeSet: {
      width: "100%",
      height: "100%",
    },
  })
);

export const contentStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "calc(100% - 62px)",
      backgroundColor: "#272A2F",
    },
    container: {
      maxWidth: "1170px",
      width: "100%",
      height: "100%",
      margin: "0 auto",
      display: "block",
    },
    content: {
      display: "flex",
    },
  })
);

export const listStyles = makeStyles(() =>
  createStyles({
    list: {
      width: "calc(100% - 212px)",
    },
    cardLayout: {
      display: "grid",
      gridTemplateColumns: "repeat(2, calc(50% - 5px))",
      gap: "10px 10px",
    },
    searchWrapper: {
      paddingLeft: "20px",
      paddingTop: "30px",
    },
    title: {
      color: "#ffffff",
    },
  })
);

export const cardStyles = makeStyles(() =>
  createStyles({
    card: {
      marginLeft: "20px",
      marginTop: "20px",
      padding: "0px 16px",
      paddingTop: "12px",
      backgroundColor: "#32383E",
      height: "104px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#363d45",
      },
    },
    content: {},
    info: {
      display: "flex",
      justifyContent: "space-between",
    },
    average: {
      display: "flex",
    },
    title: {
      color: "#ffffff",
      fontSize: "14px",
      marginBottom: "6px",
    },
    description: {
      display: "flex",
      justifyContent: "space-between",
    },
    category: {
      color: "#c8c8c8",
      fontSize: "12px",
    },
    gpa: {
      color: "#ffffff",
    },
    divider: {
      width: "100%",
      height: "1px",
      marginTop: "8px",
      marginBottom: "16px",
      backgroundColor: "#3f474f",
    },

    participant: {
      color: "#ffffff",
      fontSize: "12px",
      marginRight: "12px",
    },
    participantText: {
      marginRight: "4px",
    },
    participantCount: {
      fontWeight: "bold",
    },
    finished: {
      color: "#ffffff",
      fontSize: "12px",
    },
    finishedCount: {
      fontWeight: "bold",
    },
    finishedText: {
      marginRight: "4px",
    },
    good: {
      display: "flex",
      alignItems: "center",
      marginRight: "12px",
    },
    goodIcon: {
      "&>svg": {
        width: "16px",
        height: "16px",
        color: "rgb(24, 187, 95)",
        marginRight: "4px",
      },
    },
    goodCount: { color: "#ffffff" },
    bad: {},
    badIcon: {
      "&>svg": {
        width: "16px",
        height: "16px",
        color: "rgb(255, 164, 87)",
        marginRight: "4px",
      },
    },
    badCount: { color: "#ffffff" },
    emotion: {
      display: "flex",
    },
  })
);
export const searchStyles = makeStyles(() =>
  createStyles({
    search: {},
  })
);

export const optionStyles = makeStyles(() =>
  createStyles({
    option: {
      width: "197px",
      height: "100%",
      marginTop: "40px",
      paddingRight: "15px",
    },
  })
);

export const categoryStyles = makeStyles(() =>
  createStyles({
    category: {},
    title: {
      color: "#ffffff",
      marginBottom: "12px",
      fontSize: "14px",
    },
    detail: {
      maxHeight: "0px",
      transition: "ease-in 0.5s all",
      overflowY: "hidden",
    },
    content: {
      color: "#ffffff",
      marginBottom: "6px",
      cursor: "pointer",
      fontSize: "12px",
      "&>svg": {
        width: "16px",
        height: "16px",
        transform: "rotate(0.25turn)",
      },
    },
    open: {
      maxHeight: "150px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "3px",
    },
    count: {
      color: "#ffffff",
    },
    text: {
      color: "#ffffff",
    },
  })
);
export const filterStyles = makeStyles(() =>
  createStyles({
    filter: {},
    title: {
      color: "#ffffff",
      marginTop: "16px",
    },
    select: {
      "&>select": {
        border: "2px solid #32383E",
        backgroundColor: "#333E48",
        color: "#ffffff",
        width: "200px",
        outline: "none",
        height: "28px",
        marginTop: "10px",
        borderRadius: "4px",
      },
    },
  })
);

export const headerStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "62px",
      backgroundColor: "#333E48",
    },
    container: {
      maxWidth: "1170px",
      width: "100%",
      height: "100%",
      margin: "0 auto",
      display: "block",
    },
    header: {
      width: "100%",
      height: "100%",
      fontSize: "23px",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
    },
    dr: { fontWeight: "bold" },
    dot: {},
    code: {},
  })
);
