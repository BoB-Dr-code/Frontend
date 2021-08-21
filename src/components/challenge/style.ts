import { createStyles, makeStyles } from "@material-ui/core";

export const challengeStyles = makeStyles(() =>
  createStyles({
    challenge: {
      backgroundColor: "#262A2F",
      width: "100%",
      height: "100%",
      "& *::-webkit-scrollbar": {
        height: "10px",
        width: "8px",
        backgroundColor: "#1e1e2f",
      },
      "& *::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: "#555",
      },
      "& *::-webkit-scrollbar-track": {
        borderRadius: "10px",
        backgroundColor: "#1e1e2f",
      },
    },
  })
);

export const headerStyles = makeStyles(() =>
  createStyles({
    header: {
      height: "50px",
      width: "100%",
      backgroundColor: "#333E48",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  })
);

export const contentStyles = makeStyles(() =>
  createStyles({
    content: {
      display: "flex",
      width: "100%",
      height: "calc(100% - 146px)",
    },
    codeWrapper: {
      paddingLeft: "10px",
      display: "flex",
      width: "calc(100% - 850px)",
    },
  })
);

export const descriptionStyles = makeStyles(() =>
  createStyles({
    description: {
      width: "850px",
      padding: "15px",
    },
    contentLayout: {
      padding: "0px 20px",
    },
  })
);

export const progressStyles = makeStyles(() =>
  createStyles({
    progress: {
      display: "flex",
      marginBottom: "30px",
      width: "100%",
      justifyContent: "center",
    },
    station: {
      width: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    step: {
      width: "20px",
      height: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "4px",
      zIndex: 9,
      textAlign: "center",
      marginBottom: "4px",
      "&>svg": {
        width: "14px",
        height: "14px",
      },
    },
    text: {
      fontSize: "12px",
      color: "#ffffff",
    },

    lane: {
      height: "2px",
      width: "230px",
      backgroundColor: "#ffffff",
      margin: "0px -65px",
      marginTop: "8px",
    },
    active: {
      "&>div": {
        backgroundColor: "#F38B00",
        color: "#ffffff",
        "&>svg": {
          color: "#ffffff",
        },
      },
    },
    laneActive: {
      backgroundColor: "#F38B00",
    },
  })
);

export const explanationStyles = makeStyles(() =>
  createStyles({
    explanation: {
      paddingLeft: "20px",
    },
    title: {
      margin: "10px 0px",
      color: "#ffb700",
      fontSize: "18px",
      fontWeight: 500,
    },
    content: {
      color: "#c8c8c8",
      fontSize: "14px",
      "&>svg": {
        width: "14px",
        height: "14px",
        color: "#FFBB00",
      },
    },
  })
);

export const explanationContentStyles = makeStyles(() =>
  createStyles({
    contentWrapper: {
      border: "1px solid #666",
      borderLeft: "5px solid #dd9935",
      margin: "15px 0px",
      padding: "15px",
      overflow: "auto",
      maxHeight: "635px",
      height: "fit-content",
    },
    title: {
      color: "#ffb700",
      margin: "10px 0px",
    },
    content: {
      color: "#c8c8c8",
      lineHeight: 1.4,
      height: "fit-content",
      marginBottom: "10px",
    },
    selected: {
      color: "#ffb700",
      fontWeight: "bold",
      marginRight: "4px",
    },
    description: {
      color: "#c8c8c8",
      marginBottom: "10px",
    },
  })
);

export const buttonLayoutStyles = makeStyles(() =>
  createStyles({
    layout: {
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      "&>button": {
        width: "64px",
        height: "28px",
        lineHeight: "28px",
        fontSize: "12px",
        color: "#ffffff",
        border: "none",
        outline: "none",
        marginLeft: "6px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&>svg": {
          width: "18px",
          height: "18px",
          marginRight: "4px",
        },
      },
    },
    skip: { backgroundColor: "#f89406" },
    hint: { backgroundColor: "#62c462" },
    next: { backgroundColor: "#ee5f5b" },
  })
);

export const codeStyles = makeStyles(() =>
  createStyles({
    code: {
      height: "100%",
      flex: 1,
      paddingRight: "15px",
    },
  })
);

export const lineStyles = makeStyles(() =>
  createStyles({
    lineWrapper: {
      paddingLeft: "10px",
      display: "flex",
    },
    warning: {
      width: "22px",
      height: "16px",
      "&>svg": {
        width: "16px",
        height: "16px",
        color: "#FFBB00",
        cursor: "pointer",
      },
    },
    line: {
      color: "#d0d0d0",
      width: "20px",
      display: "flex",
      justifyContent: "flex-end",
      marginRight: "2px",
    },
    code: {
      color: "#f8f8f2",
      backgroundColor: "#32383E",
      paddingLeft: "2px",
      width: "100%",
      fontSize: "14px",
    },
    highlighting: {
      height: "100%",
      backgroundColor: "#505045",
    },
    selected: {
      backgroundColor: "#183020 !important",
    },
  })
);

export const fileStyles = makeStyles(() =>
  createStyles({
    file: {
      padding: "10px",
      width: "300px",
      height: "calc(100% - 20px)",
      backgroundColor: "#32383E",
    },
  })
);

export const rowStyles = makeStyles(() =>
  createStyles({
    row: {
      display: "flex",
      cursor: "pointer",
    },
    extension: {
      marginRight: "4px",
    },
    warning: {
      marginRight: "6px",
      marginLeft: "2px",
      "&>svg": {
        color: "#FFBB00",
        width: "16px",
        height: "16px",
      },
    },
    text: {
      fontSize: "13px",
      color: "#ddd",
    },
    active: {
      color: "#fff !important",
      fontWeight: "bold",
    },

    default: {
      "&>svg": {
        color: "#ffffff",
        width: "16px",
        height: "16px",
      },
    },
    java: {},
    c: {},
    cpp: {},
    cs: {},
    javascript: {},
    python: {},
  })
);

export const toolbarStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      width: "100%",
      height: "20px",
      paddingTop: "12px",
      paddingBottom: "4px",
    },
    navigation: {
      width: "20px",
      height: "20px",
      backgroundColor: "#3a3f44",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 15px",
      cursor: "pointer",
      "&>svg": {
        color: "#ffffff",
      },
    },
  })
);

export const footerStyles = makeStyles(() =>
  createStyles({
    footer: {
      width: "100%",
      height: "40px",
      margin: "10px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "13px",
    },
    license: {
      color: "#dd9935",
      marginRight: "8px",
    },
    text: {
      color: "#c8c8c8",
    },
  })
);

export const modalStyles = makeStyles(() =>
  createStyles({
    modal: {
      width: "30%",
      height: "40%",
      position: "fixed",
      backgroundColor: "#2E3943",
      zIndex: 9999,
      marginLeft: "35%",
      marginTop: "10%",
      padding: "20px",
      borderRadius: "12px",
      top: 0,
      left: 0,
    },
    modalHeader: {
      marginBottom: "20px",
      height: "24px",
      width: "100%",
    },
    modalTitle: {
      display: "flex",
      alignItems: "center",
      color: "#c8c8c8",
      fontSize: "17px",
      fontWeight: 500,
      "&>svg": {
        color: "#42A442",
        marginRight: "8px",
      },
    },

    modalBody: {
      width: "100%",
      height: "calc(100% - 72px)",
    },
    modalContent: {
      color: "#c8c8c8",
      fontSize: "14px",
      marginBottom: "30px",
    },

    notice: {
      color: "#c8c8c8",
      fontSize: "14px",
    },

    modalFooter: {
      display: "flex",
      justifyContent: "space-between",
    },

    buttonWrapper: {
      display: "flex",
      "&>div": {
        marginLeft: "6px",
      },
      "&>div>button": {
        width: "68px",
        height: "28px",
        lineHeight: "28px",
        fontSize: "12px",
        outline: "none",
        background: "none",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      },
    },
    selectLabel: {
      color: "#c8c8c8",
      fontWeight: "bold",
      marginRight: "6px",
    },
    select: {
      "&>select": {
        border: "2px solid #1f628d",
        backgroundColor: "#002848",
        color: "#ffffff",
        width: "240px",
        outline: "none",
        height: "24px",
      },
    },

    close: {
      "&>button": {
        border: "2px solid #1f628d",
        color: "#1f628d",
        "&:hover": {
          backgroundColor: "#1f628d",
          color: "#ffffff",
        },
      },
    },
    more: {
      "&>button": {
        border: "2px solid #42a442",
        color: "#42a442",
        "&:hover": {
          backgroundColor: "#42a442",
          color: "#ffffff",
        },
      },
    },

    overlay: {
      width: "100%",
      height: "100%",
      position: "fixed",
      display: "fixed",
      backgroundColor: "black",
      top: 0,
      left: 0,
      opacity: 0.4,
      zIndex: 9998,
    },
    visibility: {
      visibility: "hidden",
    },
  })
);
