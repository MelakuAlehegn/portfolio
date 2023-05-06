import React from 'react'
// import Button from '../Button/Button';
import { Button } from '@material-ui/core'
function Navbar() {
    return (
        <div>
            Navbar
            {/* <Button name={'resume'} /> */}
            <Button variant="outlined" color="primary">
                Resume
            </Button>
        </div>
    )
}

export default Navbar