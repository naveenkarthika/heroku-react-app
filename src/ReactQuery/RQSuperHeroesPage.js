import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from './hooks/useSuperHeroesData';

export const RQSuperHeroesPage = () => {

  const onSuccess = (data) => {
    console.log('data', data)
  };

  const onError = (error) => {
    console.log('error', error);
  };

  /** dataTransformation */

  const dataTransformation = (data) => {
      const superHeroes = data.data.map(_ => _.name);
      return superHeroes; 
  };


  const { isLoading, isError, error, isFetching, data, refetch } = useSuperHeroesData(onSuccess, onError, dataTransformation);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQSuper Heroes Page</h2>
      <div>
        <button onClick={refetch}>Refetch data!!</button>
      </div>
      <h2>RQSuper Heroes Name: </h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
      <br />
      <hr />
      <h2>Links</h2>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        )})}
    </>
  );
};
