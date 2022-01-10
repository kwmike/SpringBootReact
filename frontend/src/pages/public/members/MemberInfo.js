import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';

function MemberInfo() {
    const params = useParams();
    const location = useLocation();
    const members = useSelector(state => state.members.data)
    const member = members.find(member => member.id === parseInt(params.id));
    const {id,fname,lname} = member;
    const name = fname + " " + lname;
    return (
        <div>
        <p>Name: {name}</p>
        <p>Params: {params.id}</p>
        <p>Location: {location.pathname}</p>
        </div>
    )
}

export default MemberInfo
