import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Divider />
      <Typography variant="body1">
       Created by Asif & Saurabh 2021
      </Typography>
      <Typography variant="caption">
        AttainU Project
        <Link href="https://attainu.com/" target="_blank" rel="noopener">
          AttainU
        </Link>
      </Typography>
    </div>
  );
}
