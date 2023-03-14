import Typography from "@material-ui/core/Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <AccessAlarmIcon />
        <Typography variant="h1" component="h2" gutterBottom>
          Heading
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
