import "typeface-roboto";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const headerFooterStyle = {
  padding: 8,
  textAlign: "center"
};
const mainStyle = {
  padding: 16,
  textAlign: "center"
};
const navStyle = { marginLeft: 5 };

// xs=12 valor superior de ancho de pantalla que la grid puede usar
// en el panel de NAV, tenemos un grid container anidado en un grid item
// direction="column" --> indica que el contenido ira VERTICAL
// el contenido principal, tambien es un grid container anidado
export default function App() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <Typography>Header</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 1</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 2</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 4</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main Content 1</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main Content 2</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main Content 3</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={mainStyle}>
                <Typography>Main Content 4</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <Typography>Footer</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
