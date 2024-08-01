import React from "react";
import { useUserContext } from "../context/UserContext";



//*********** */ This is an Optional Page if we need Actual Data then we use it else no need of this page *************************


export const UserData = () => {
  const { users } = useUserContext();

  return (
    <>
      {/********** *Table Heading ******** */}
      <table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>FullName</th>
            <th>Demography</th>
            <th>Designation </th>
            <th>Location </th>
          </tr>
        </thead>
        {/************** UserData send as a Props in order to simplify the operations********** */}
        <tbody>
          {users.map((currentUser) => {
            const { id, firstName, maidenName, lastName, image, gender, age } =
              currentUser;
            const { title } = currentUser.company;
            const { state, country } = currentUser.address;

            return (
              <>
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <img src={image} alt="id" width="25px" height="25px" />
                  </td>
                  <td>
                    {firstName} {maidenName} {lastName}
                  </td>
                  <td>
                    {gender}/{age}
                  </td>
                  <td>{title}</td>
                  <td>
                    {state}, {country}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
