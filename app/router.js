import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";

import ContactList from "./component/contactList"
import ContactDetail from "./component/contactDetail"

const AppRouter = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="contactList"
                    component={ContactList}
                    title="Contact List"
                />
                <Scene
                    key="contactDetail"
                    component={ContactDetail}
                    title="Contact Detail"
                    backTitle="返回"
                    onBack={() => {
                        Actions.pop();
                    }}
                />
            </Scene>
        </Router>
    );
};

export default AppRouter;