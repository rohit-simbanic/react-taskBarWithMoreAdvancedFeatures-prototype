import React, { ReactElement, FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
// import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'John' } = props;
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
          marginBottom: '36px',
        }}
      >
        {`${name.substring(0, 1)}`}
      </Avatar>
      <Typography variant="h4" color="text.primary">
        {name}
      </Typography>
      <Typography
        variant="h6"
        color="text.primary"
        sx={{ padding: '18px 0' }}
      >
        Welcome {`${name.substring(0, 1)}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal task manager, {`${name}`}
      </Typography>
    </Box>
  );
};

// Profile.propTypes = {
//   name: PropTypes.string,
// };

export default Profile;
