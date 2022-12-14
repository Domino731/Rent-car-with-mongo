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
import {ROUTES} from "./Routes";
import Dashboard from "./Containers/Dashboard";
import ModalManagement from "./Containers/ModalManagement";

function App() {
    //
    return (
        <div className="relative h-full w-full">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<Dashboard/>}/>
                        <Route path={ROUTES.LOGIN} element={<Login/>}/>
                        <Route path={ROUTES.REGISTER} element={<Register/>}/>
                    </Routes>
                </BrowserRouter>
                <ModalManagement/>
            </Provider>
        </div>
    );
}

export default App;
