import './Searchbar.css';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Searchbar() {

    const [query, setQuery] = useState("");

    return (
        <form className='searchbar'>
            <SearchIcon className='searchbar__icon' style={{ fontSize: '30px' }} />
            <input
                className='searchbar__input'
                type="text"
                placeholder="Search username..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
        </form>
    )
}

export default Searchbar