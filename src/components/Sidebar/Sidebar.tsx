import React, { ReactElement, FC } from 'react';
import Grid from '@mui/material/Grid';
import Profile from '../Profile/Profile';
import CreatTaskForm from '../TaskForm/CreatTaskForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="Rohit" />
      <CreatTaskForm />
    </Grid>
  );
};

export default Sidebar;
