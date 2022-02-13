import Card from './Card';
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS_QUERY } from "../utils/shared";
import React, { useEffect, useState } from 'react';
import Classes from './Users.module.css';

const FETCH_LIMIT = 20;

export default function UsersComponent() {
  
  const [ pageNumber, setpageNumber ] = useState(1);
  const [ isLoaded, setisLoaded ] = useState(false);
  const [ displayedUsers, setdisplayedUsers ] = useState([]);
  
  const { data } = useQuery(GET_ALL_USERS_QUERY);
  
  const loadMoreHandler = () => {
    setpageNumber(pageNumber + 1);    
    setdisplayedUsers(fetchNextUsers(pageNumber + 1));
  }

  const fetchNextUsers = (pageNum) => {
    const end = pageNum * FETCH_LIMIT;

    if(end >= 2000)
    {
      setisLoaded(true);
      return data.users;
    }

    const users = data.users.filter((_item, index) => {
      return index + 1 <= end;
    });
    setisLoaded(true);
    return users;
  }



  useEffect(() => {
    if (data && !isLoaded) {
      setdisplayedUsers( fetchNextUsers(pageNumber) );
    }
  })

  return (
    <div>
      <div className={Classes.cardContainer}>
        <Card users={ displayedUsers } />
      </div>
      <div className={Classes.btnContainer}>
        <button className={Classes.btn} onClick={loadMoreHandler}>
          Load More
        </button>
      </div>
    </div>
  );
}