import React, { useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import {IRepo } from '../models/models';
import styles from "./RepoCard.module.css"

function RepoCard({repo}:{repo:IRepo}) {
    const {addFavorite,removeFavorite} = useActions()
    const {favorites} =useAppSelector(state => state.github)
    const [isFav, setIsFav] =useState(favorites.includes(repo.html_url))
    const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        addFavorite(repo.html_url)
        setIsFav(true)
    }
    const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        removeFavorite(repo.html_url)
        setIsFav(false)
    }
    return (
        <div className={styles.container}>
            <a href={repo.html_url} target="blank">
            <h2 className={styles.name}>{repo.full_name}</h2>
            <div >
                Forks: <span>{repo.forks}</span>
                Watchers: <span>{repo.watchers}</span>
            </div>
            <div>{repo?.description}</div>
        
            </a>
            {!isFav &&  <button className={styles.add} onClick={addToFavorite}>Add</button>}
            {isFav &&  <button className={styles.remove} onClick={removeFromFavorite}>Remove</button> }
           
        </div>
    );
}

export default RepoCard;