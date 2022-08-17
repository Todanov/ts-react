import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GihubState {
    favorites: string[]
}
 const initialState:GihubState = {
    favorites: JSON.parse(localStorage.getItem('rfs') ?? '[]')
}
export const gitHubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>){
            state.favorites.push(action.payload)
            localStorage.setItem('rfc', JSON.stringify(state.favorites))
        },
        removeFavorite(state, action: PayloadAction<string>){
            state.favorites=state.favorites.filter(f => f !== action.payload)
            localStorage.setItem('rfc', JSON.stringify(state.favorites))
        }
    }
})

export const githubActions = gitHubSlice.actions
export const githubReducer = gitHubSlice.reducer