import React from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHeros = (heroId) => {
    return axios.get(`http://localhost:3001/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({ heroIds }) => {
    const queryResult = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHeros(id)
            }
        })
    );

    console.log({queryResult});
    
    return (
        <div>
            <h2>DynamicParallelPage</h2>
        </div>
    )
}
