import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';


const fetchSuperHeros = () => {
    return axios.get('http://localhost:3001/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:3001/friends')
}

export const ParallelQueriesPage = () => {

    const { data: superheroes, isLoading: isSuperHerosLoading } = useQuery('super-heroes', fetchSuperHeros)
    const { data: friends, isLoading: isFriendsLoading } = useQuery('friends', fetchFriends)

    if(isSuperHerosLoading || isFriendsLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>ParallelQueriesPage</h2>
            {superheroes?.data.map(el => {
                return <h2>{el.name}</h2>
            })}
            <hr />
            {friends?.data.map(el => {
                return <h2>{el.name}</h2>
            })}
        </div>
    )
}
