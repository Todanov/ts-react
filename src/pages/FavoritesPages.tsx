import React from 'react';
import { useAppSelector } from '../hooks/redux';

function FavoritesPages() {
  const {favorites} =  useAppSelector(state => state.github)
  if(favorites.length === 0) return <p>No items</p> 
    return (
        <div>
            {favorites.map(f => (
                <li key={f}>
                    <a href={f}>{f}</a>
                </li>
            ))}
        </div>
    );
}

export default FavoritesPages;