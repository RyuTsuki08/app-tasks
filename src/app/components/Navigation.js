import React from 'react';
import icon from '../img/icon-nav.svg';


function Navigation(props)
{
    return(
   <nav className='light-blue darken-4'>
     <div className="nav">
      <a href="/"><img className='icon-nav' src={icon} /></a>
      <h1 className='title-nav'> My app to tasks </h1>
    </div>
  </nav>
    );
}

export default Navigation;