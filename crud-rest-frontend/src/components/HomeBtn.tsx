import React from "react";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

const HomeIconStyle = styled(HomeIcon)({
    width: '50px',
    height: '50px'
})

export default function HomeBtn(props: any) {
    return(
    <Link to="/">
        <IconButton>
            <HomeIconStyle style={{color:"#365271"}}/>
        </IconButton>
    </Link>
    );
}