import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  addButton: {
    position: "absolute",
    bottom: 60,
    right: 15,
    zIndex: 10,
    background: "#1EAC46",
    fontSize: 40,
    fontWeight: "bold",
  },
  addIcon: {
    color: "#fff",

    fontSize: 30,
  },
});

export default useStyles;
