import './App.css';
import React from "react";
import Users from "./components/users/Users";
import {Provider} from "react-redux";
import {state} from "./redux/reducers";
import UsersBiographyHoc from "./components/usersBiography/usersBiographyHoc/usersBiographyHoc";

function App() {

  return (
      <Provider store={state} >
        <div className='mainWrapper'>
            <div className='leftBlock'>
                <Users/>
            </div>
            <div className='rightBlock'>
                <UsersBiographyHoc />
            </div>
        </div>
      </Provider>
  );
}

export default App;
