import React from 'react';
import { Container, Grow, Grid } from '@mui/material';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import chatVerse from '../images/chatverse.png';
import { AppBarWrapper, Heading, Image } from '../style';



const AppContent = () => {
    return (
        <Container maxWidth='lg'>
            <AppBarWrapper position='static' color='inherit'>
                <Heading variant='h2' align='center'>
                ChatVerse
                </Heading>
                <Image src={chatVerse} alt='chatVerse' height='60' />
            </AppBarWrapper>
            <Grow in>
                <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={4}>
                    <Grid item xs={12} sm={7}>
                    <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Form />
                    </Grid>
                </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default AppContent;