import { useState } from "react";
import "./App.css";
import { UserData } from "./components/UserData";
import UserList from "./components/UserList";
import { useFilterConext } from "./context/FilterContext";

function App() {
  const { sorting } = useFilterConext();
  const { filter_users } = useFilterConext();
  let userData = filter_users;

  console.log("data", userData);

  return (
    <>
      <section>
        <section className="border-2 black">
          {/************ * Logo ans Menu bar************ */}
          <div className="flex justify-between">
            <div>
              <img
                src="./public/download.jpg"
                alt=""
                height="60px"
                width="60px"
                className="ml-3"
              />
            </div>
            <div>
              <img src="./public/Menu.jpg" alt="" height="40px" width="40px" />
            </div>
          </div>

          {/************* * Employee*********** */}
          <div className="flex justify-between mt-14 ">
            <div className="text-4xl ml-4">Employees</div>
            <div className="flex space-x-14 mr-4 mb-9">
              <div>
                <img
                  src="./public/filter.jpg"
                  alt=""
                  height="25px"
                  width="25px"
                />
              </div>

              {/* ************Sorting UI************************** */}
              <div className="text-2xl border-2 ">
                <form action="#">
                  <label htmlFor="sort"></label>
                  <select name="sort" id="sort" onClick={sorting}>
                    
                    <option value="male">Male</option>
                    

                    <option value="female">Female</option>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/*******List Of user ******************** * */}
      <UserList />
    </>
  );
}

export default App;
