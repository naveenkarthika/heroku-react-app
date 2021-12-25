import React from 'react';
import { useParams } from 'react-router-dom';
import { useSuperHeroData } from './hooks/useSuperHeroData'

export const RQSuperHeroPage = () => {
    const { heroId } = useParams()
    const { isLoading, error, isError, data } = useSuperHeroData(heroId);

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <div>
            <h2>Super Hero Details</h2>
            {data?.data.name} - {data?.data.alterEgo}           
        </div>
    )
}
