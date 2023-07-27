// import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
// import chatVerse from './images/chatverse.png';
// import useStyle from './style';

// const App = () => {
//   const classes = useStyle();
//   return (
//     <Container maxWidth='lg'>
//       <AppBar className={classes.appBar} position='static' color='inherit'>
//         <Typography className={classes.heading} variant='h2' align='center'>ChatVerse</Typography>
//         <img className={classes.image} src={chatVerse} alt='chatVerse' height='60'/>
//       </AppBar>
//       <Grow in>
//         <Container>
//           <Grid container justify='space-between' alignItems='stretch' spacing={4}>
//             <Grid item xs={12} sm={7}>
//               <Posts />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Form />
//             </Grid>
//           </Grid>
//         </Container>
//       </Grow>
//     </Container>
//   );
// };

// export default App;
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppContent from './components/AppContent';
import { createTheme } from '@mui/material/styles'

const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
};

export default App;