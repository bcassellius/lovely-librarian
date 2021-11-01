import React, { useState } from "react";
import { useQuery } from "@apollo/client";

// utils
import { QUERY_STAFF } from "../../utils/queries";

const StaffSearch = () => {
  const [searchFirstName, setSearchFirstName] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const dataInput =
    searchFirstName.length > 0 ||
    searchLastName.length > 0 ||
    searchTitle.length > 0;

  const { loading, data } = useQuery(QUERY_STAFF);
  const staffData = data?.staff || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  // <h4>You need to be logged in to see this page. Use the navigation links above to log in or signup!</h4>

  return (
    <div>
      {(!dataInput || (dataInput && searchFirstName.length > 0)) && (
        <div className="staffSearchInput">
          <h2>First Name:</h2>
          <input
            type="text"
            className="searchInput"
            placeholder="Staff Search by first name..."
            onChange={(event) => {
              setSearchFirstName(event.target.value);
            }}
          />
        </div>
      )}
      {(!dataInput || (dataInput && searchLastName.length > 0)) && (
        <div className="staffSearchInput">
          <h2>Last Name:</h2>
          <input
            type="text"
            className="searchInput"
            placeholder="Staff Search by last name..."
            onChange={(event) => {
              setSearchLastName(event.target.value);
            }}
          />
        </div>
      )}
      {(!dataInput || (dataInput && searchTitle.length > 0)) && (
        <div className="staffSearchInput">
          <h2>Job Title:</h2>
          <input
            type="text"
            className="searchInput"
            placeholder="Staff Search by job title..."
            onChange={(event) => {
              setSearchTitle(event.target.value);
            }}
          />
        </div>
      )}
      {staffData &&
        staffData
          .filter((staffMembers) => {
            if (
              searchFirstName === "" &&
              searchLastName === "" &&
              searchTitle === ""
            ) {
              return true;
            } else {
              // filter by firstName
              if (
                searchLastName === "" &&
                searchTitle === "" &&
                staffMembers.firstName
                  .toLowerCase()
                  .includes(searchFirstName.toLowerCase()) &&
                searchFirstName.length >= 1
              ) {
                return staffMembers;
                // filter by lastName
              } else if (
                searchFirstName === "" &&
                searchTitle === "" &&
                staffMembers.lastName
                  .toLowerCase()
                  .includes(searchLastName.toLowerCase())
              ) {
                return staffMembers;
                // filter by job title
              } else if (
                searchFirstName === "" &&
                searchLastName === "" &&
                staffMembers.title
                  .toLowerCase()
                  .includes(searchTitle.toLowerCase())
              ) {
                return staffMembers;
              } else {
                return false;
              }
            }
          })
          .map((staffMembers, key) => {
            return (
              <div className="staffMembers" key={key}>
                <div className="staffMembersName">
                  {staffMembers.firstName + " " + staffMembers.lastName}
                </div>
                <div className="infoContainer">
                  <ul className="staffMembersInfo">
                    <li>Title: {staffMembers.title}</li>
                    <li>Extension: {staffMembers.extension}</li>
                    <li>Office Number: {staffMembers.office}</li>
                    <li>Email Address: {staffMembers.email}</li>
                  </ul>
                </div>
              </div>
            );
          })}
    </div>
  );
};

// exporting... ... ...
export default StaffSearch;
