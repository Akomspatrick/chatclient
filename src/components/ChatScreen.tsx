import { Button, Grid, TextField, Container, Box } from '@mui/material';
import React from 'react';
import Rooms from './Rooms';


const ChatScreen = ({ joinRoom }: Rooms) => {
    const [userName, setUsername] = React.useState('');
    const [chatRoom, setRoom] = React.useState('');

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" minHeight="100vh" justifyContent="center" alignItems="center">
                <form onSubmit={e => {
                    e.preventDefault();
                    console.log('submit');
                    joinRoom(userName, chatRoom);
                }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Room"
                                value={chatRoom}
                                onChange={(e) => setRoom(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">
                                Join
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    )
}

export default ChatScreen;