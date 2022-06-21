import React from 'react';
import { styled } from '@mui/material/styles';

import { Toolbar, Typography } from '@mui/material';

import AddEmployeeBtn from './AddEmployeeBtn';

const Bar = styled(Toolbar)({
    backgroundColor: '#365271',
    padding: '16 8 8 8',
    fontWeight: 'bold',
    fontSize: '40px',
    color: 'white',
    position: 'static'
  });
  
  const HeaderTitle = styled(Typography)({
    fontWeight: "bold"
  })

  function HeaderBar(props: any) {
    return (
        <Bar>
            <HeaderTitle variant="h4" sx={{ flexGrow: 1 }}>
              {props.title}
            </HeaderTitle>
            {props.children}
        </Bar>
    );
  }

  export default HeaderBar;