import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import { data } from './data';
import NestedList from './NestedList';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h2">Nested List</Typography>
      <NestedList data={data} />
    </React.Fragment>
  );
}
