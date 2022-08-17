import { ServerResponse, IUser, IRepo } from './../../models/models';

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const githubApi =createApi({
    reducerPath:'github/api',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        //массив пользователей с сервера
        searchUsers:build.query<IUser[], string>({
            query: (search:string) => ({
                url: 'search/users',
                params:{
                    q:search,
                    per_page:10,
                
                }
            }),
            //изменение ответа сервера
            transformResponse:(response: ServerResponse<IUser>)=> response.items  
        }),
        getUserRepos: build.query<IRepo[], string>({
         query:(username: string) => ({
            url: `users/${username}/repos`
         })
        })
    })
   
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi