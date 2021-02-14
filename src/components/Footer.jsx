import React from 'react';


function Footer () {
    const year = new Date().getFullYear();
    return <footer>
        MD Copyrights© {year}
    </footer>
}

export default Footer;