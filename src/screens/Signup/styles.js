import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default styles;
