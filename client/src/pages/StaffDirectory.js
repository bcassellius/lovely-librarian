import React from "react";
// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// components
import StaffSearch from "../components/StaffSearch";
// utils
// import { QUERY_STAFF } from '../utils/queries';
// import Auth from "../utils/auth";

const StaffDirectory = () => {
  // // redirect to book search if user is not logged in
  // if (!Auth.loggedIn()) {
  //     return <Redirect to="/" />;
  // };

  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(QUERY_STAFF);
  //
  // if (loading) {
  //     return <div>Loading...</div>;
  // }
  //
  // const staff = data?.staff || data?.staff || {};
  //
  // if (!staff?.firstName) {
  //     return (
  //         <h4>You need to be logged in to see this page. Use the navigation links above to log in or signup!</h4>
  //     );
  // }

  return (
    <div>
      <StaffSearch />
    </div>
  );
};

export default StaffDirectory;
