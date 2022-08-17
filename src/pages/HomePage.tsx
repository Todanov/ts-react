import React, { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../store/github/github.api";
import styles from "./HomePage.module.css";

function HomePage() {
    const [search,setSearch] =useState('')
    const [dropDown,setDropdown]=useState(false)
    const debounced =useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced,{
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [fetchRepos, {isLoading:areReposLoadig, data:repos}] =useLazyGetUserReposQuery()
 const clickHandler =(username:string)=> {
    fetchRepos(username)
    setDropdown(false)
 }
  useEffect(()=>{
    setDropdown(debounced.length > 3 && data?.length! > 0)
  },[debounced,data])
  return (
    <div className={styles.wrapper}>
      
      {isError && <p>Lol</p>}
     
        <div className={styles.content}>
          <input 
           className={styles.info}
           placeholder="Search hithub users..."
           value={search}
           onChange={e => setSearch(e.target.value)}
           />
         {dropDown && <ul className={styles.dropdown}>
          {isLoading && <p className={styles.loading}>Loading.....</p>}
          {data?.map(user => (
            <li className={styles.item} key={user.id}
              onClick={()=>clickHandler(user.login)}
            >
                {user.login}
            </li>
          ))}
          </ul>}
          <div className={styles.container}>
                {areReposLoadig && <p className={styles.loading}>Loading....</p>}
                {repos?.map(repo => <RepoCard repo={repo} />)}
            </div>
        </div>

    </div>
  );
}

export default HomePage;
