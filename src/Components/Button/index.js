import React from 'react';
import './style.css';

export const Button = ({children,onClick,background}) => { return ( <button id="_button" onClick={onClick} style={{background:background||"none"}}>{children}</button> ); }
 
