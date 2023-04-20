import React, { FC, ReactElement } from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar/Sidebar';
import TaskArea from '../../components/TaskArea/TaskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
