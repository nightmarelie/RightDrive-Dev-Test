import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { CryptoCollection } from "./features";

function App() {
  const classes = useStyles();

  return (
    <Box>
      <CryptoCollection />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));

export default App;
