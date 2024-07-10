import * as React from 'react';
import '../../css/output.css'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import config from "../../md-web.config.json"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Home() {
  if (config.normal_navbar === "true") {
    return (
      <div>
        <div class="navbar">
          <div class="navbar-start">
            <a class="navbar-item">{config.navbar_title}</a>
          </div>
          <div class="navbar-end">
            <a href={config.navbar_item_1_redirect} class="navbar-item">{config.navbar_item_1}</a>
            <a href={config.navbar_item_2_redirect} class="navbar-item">{config.navbar_item_2}</a>
            <a href={config.navbar_item_3_redirect} class="navbar-item">{config.navbar_item_3}</a>
          </div>
        </div>      
      </div>
    );
  }

  else if (config.normal_navbar === "false") {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          
      <AppBar position="static">
        <Toolbar>
        <svg className='mr-3' width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"/></svg>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {config.navbar_title}
          </Typography>
          <Button href={config.navbar_item_1_redirect} color="inherit">{config.navbar_item_1}</Button>
          <Button href={config.navbar_item_2_redirect} color="inherit">{config.navbar_item_2}</Button>
          <Button href={config.navbar_item_3_redirect} color="inherit">{config.navbar_item_3}</Button>
        </Toolbar>
      </AppBar>
      </Box>
      </div>
    )
  } 
}
