import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./Redux/store";
import {Login, Register} from "./Containers/Auth";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoute from "./Containers/PrivateRoute";
import {ROUTES} from "./Routes";
import CarCard from "./Components/CarCard";

function App() {
    //
    return (
        <Provider store={store}>
            <CarCard/>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path={ROUTES.HOME} element={<PrivateRoute>*/}
            {/*            <div>HOME</div>*/}
            {/*        </PrivateRoute>}/>*/}
            {/*        <Route path={ROUTES.LOGIN} element={<Login/>}/>*/}
            {/*        <Route path={ROUTES.REGISTER} element={<Register/>}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </Provider>
    );
}

export default App;
