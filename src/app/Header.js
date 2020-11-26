import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/campfire'

function Header() {
    return (
        <header className="header">
            <h1>
                <Icon className="header__icon" icon={locationIcon} />
                Wildfire Tracker (Powered By B3ns44d)
            </h1>
        </header>
    )
}

export default Header;