import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
import {ArrowUpRight,Menu,X} from 'lucide-react';
import Brand from './Brand';
const links=[['Company','/company'],['Products','/products'],['Applications','/applications'],['Manufacturing','/manufacturing'],['Quality','/quality'],['Infrastructure','/infrastructure']];
export default function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="header-inner"><Brand/><nav className={open?'nav nav-open':'nav'} aria-label="Main navigation"><NavLink end to="/" onClick={()=>setOpen(false)}>Overview</NavLink>{links.map(([n,p])=><NavLink key={p} to={p} onClick={()=>setOpen(false)}>{n}</NavLink>)}<Link className="nav-contact" to="/contact" onClick={()=>setOpen(false)}>Start a project <ArrowUpRight size={14}/></Link></nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div></header>}
