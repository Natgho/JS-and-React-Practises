import React from 'react';

function Header({number, data}) {
    console.log("Header re-rendered!")
    return (
        <div>Header - {number}
            <hr/>
        </div>

    );
}

export default React.memo(Header);