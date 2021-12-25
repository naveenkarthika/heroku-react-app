import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';


const fetchUserByEmailId = (email) => {
    return axios.get(`http://localhost:3001/users/${email}`)
}
const fetchCourseByChannelId = (channelId) => {
    return axios.get(`http://localhost:3001/channels/${channelId}`)
}

export const DependentQueriesPage = ({ email }) => {
    
    const { data: user, isLoading: isLoadingUser, isError, error } = useQuery(['users', email], () => fetchUserByEmailId(email))
    const channelId = user?.data.channelId;
    
    useQuery(['courses', channelId], () => fetchCourseByChannelId(channelId), {
        enabled: !!channelId
    });

    
    return (
        <div>
            <h2>DependentQueriesPage</h2>
        </div>
    )
}
