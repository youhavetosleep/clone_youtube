
import React from 'react';
import { useRef } from 'react';
import styles from './search_header.module.css'
const SearchHeader = ({onSearch}) => {

const inputRef = useRef()

const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value)
}


const onClick = () => {
    console.log('onClick')
    handleSearch()
}

const onKeyPress = (event) => {
    
    if(event.key ==='Enter') {
        handleSearch()
        console.log('press')
    }
}



    return (
        <header className={styles.header}> 
            <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.png" alt="youtube_logo"/>
            <h2 className={styles.title}>Youtube</h2>
            </div>
            <input 
            ref = {inputRef}
            className={styles.input} 
            type="search" 
            placeholder="search..." 
            onKeyPress={onKeyPress} />
            <button className={styles.button} onClick={onClick}>
                <img 
                className={styles.buttonImg}
                src='/images/search.png' alt="search_logo" />
            </button>
        </header>
    );
};

export default SearchHeader;