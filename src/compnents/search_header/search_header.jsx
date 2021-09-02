
import React from 'react';
import styles from './search_header.module.css'
const SearchHeader = () => {
    return (
        <header className={styles.header}> 
            <img src="/images/logo.png" alt="youtube_logo"/>
            <h1>youtube</h1>
            <input type="search" placeholder="search..." />
            <button>
                <img src='/images/search.png' alt="search_logo" />
            </button>
        </header>
    );
};

export default SearchHeader;