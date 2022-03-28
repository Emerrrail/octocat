import './Searchbar.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Searchbar() {

    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`/users/${query}/repos`);
    }

    return (
        <form
            className='searchbar'
            onSubmit={onSubmit}
        >
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