import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import './style.css'

// utils
import { QUERY_STAFF } from '../../utils/queries';


const StaffSearch = () => {
    const [searchFirstName, setSearchFirstName] = useState('');
    const [searchLastName, setSearchLastName] = useState('');
    const [searchTitle, setSearchTitle] = useState('');

    const dataInput = searchFirstName.length > 0 || searchLastName.length > 0 || searchTitle.length > 0;

    const { loading, data } = useQuery(QUERY_STAFF);
    const staffData = data?.staff || [];


    if (loading) {
        return <div>Loading...</div>;
    };
        

    return (
        <div className='text-info searching'>
                
            <div className='staffSearchContainer'>
                <h1 className="center">Staff Search </h1>
                { ((!dataInput) || (dataInput && searchFirstName.length > 0)) &&
                    <div className="staffSearchInput">
                        <h4>First Name:</h4>
                        <input
                            type="text"
                            className="searchInput border-info text-info"
                            placeholder="Staff Search by first name..."
                            onChange={ event => { setSearchFirstName(event.target.value) } }
                        />
                    </div>
                }
                { ((!dataInput) || (dataInput && searchLastName.length > 0)) &&
                    <div className="staffSearchInput">
                        <h4>Last Name:</h4>
                        <input
                            type="text"
                            className="searchInput border-info text-info"
                            placeholder="Staff Search by last name..."
                            onChange={ event => { setSearchLastName(event.target.value) } }
                        />
                    </div>
                }
                { ((!dataInput) || (dataInput && searchTitle.length > 0)) &&
                    <div className="staffSearchInput">
                        <h4>Job Title:</h4>
                        <input
                            type="text"
                            className="searchInput border-info text-info"
                            placeholder="Staff Search by job title..."
                            onChange={ event => { setSearchTitle(event.target.value) } }
                        />
                    </div>
                }
            </div>
            <h1 className="label"> Staff </h1>
            { staffData &&
                staffData.filter((staffMembers) => {
                    if (searchFirstName === '' && searchLastName === '' && searchTitle === '') {
                        return true;
                    } else {
                        // filter by firstName
                        if (searchLastName === '' && searchTitle === '' && staffMembers.firstName.toLowerCase().includes(searchFirstName.toLowerCase()) && searchFirstName.length >= 1) {
                            return staffMembers
                        // filter by lastName
                        } else if (searchFirstName === '' && searchTitle === '' && staffMembers.lastName.toLowerCase().includes(searchLastName.toLowerCase())) {
                            return staffMembers
                        // filter by job title
                        } else if (searchFirstName === '' && searchLastName === '' && staffMembers.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                            return staffMembers
                        } else {
                            return false;
                        }
                    }
            }).map((staffMembers, key) => {
                return (
                    <div className="card staffMembers" key={key}>
                        <img src="../../../icons/person.png" alt="Avatar" />
                        <div className="staffMembersName bg-info text-white font-weight-bold">
                            { staffMembers.firstName + ' ' + staffMembers.lastName }
                        </div>
                        <div className="infoContainer">
                            <ul className="staffMembersInfo">
                                <li>
                                    Title: { staffMembers.title }
                                </li>
                                <li>
                                    Extension: { staffMembers.extension }
                                </li>
                                <li>
                                    Office Number: { staffMembers.office }
                                </li>
                                <li>
                                    Email Address: { staffMembers.email }
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }) }
        </div>
    );
}

// exporting... ... ...
export default StaffSearch;