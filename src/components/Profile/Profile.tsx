import React, { ReactElement, FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        J
      </Avatar>
      <Typography variant="h4" color="text.primary">
        Jackie chang
      </Typography>
      <Typography variant="h6" color="text.primary">
        Welcome Jackie
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal task manager
      </Typography>
    </Box>
  );
};

export default Profile;
