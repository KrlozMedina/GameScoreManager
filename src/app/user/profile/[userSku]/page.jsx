"use client";

import withAuth from "hst/hoc/with-auth";

function UserDetail({params}){
    return (
        <p>Hello UserDetail!</p>
    );
}

export default withAuth(UserDetail);