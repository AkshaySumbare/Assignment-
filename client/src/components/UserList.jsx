import React from "react";
import { useFilterConext } from "../context/FilterContext";

const UserList = () => {
  const { filter_users } = useFilterConext();
  const users = filter_users;

  return (
    <>
     <section className="border-2 black">
      <table>
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

        {/* ********* * map method is used to show data ********** */}
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
      </section>
    </>
  );
};

export default UserList;
