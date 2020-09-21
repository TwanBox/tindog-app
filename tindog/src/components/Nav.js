import React from 'react'
import PetsIcon from '@material-ui/icons/Pets';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import logo from './tindog-head-logo.svg';
import './Nav.css'


function Nav() {
    return (
        <div className="nav">
						<IconButton>
							<PetsIcon className="nav__icon" />
						</IconButton>
            <img
							src={logo}
							alt="tindog-logo"
							className="nav__logo"
            />
						<IconButton>
							<ForumIcon className="nav__icon" />
						</IconButton>
        </div>
    )
}

export default Nav;
