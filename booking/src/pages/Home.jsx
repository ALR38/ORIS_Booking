import React from "react";
import Layout from "../layout/MainLayout.jsx";
import Main from "../containers/Main";
import ActivitiesContainer from "../containers/ActivitiesContainer";
import Wrapper from "../containers/Wrapper";

function Home() {
    return (
        <Layout>
            <Main />
            <ActivitiesContainer />
            <Wrapper />
        </Layout>
    );
}

export default Home;