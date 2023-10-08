import Page from "@/shared/components/layout/Page";
import Layout from "@/shared/components/layout/Layout";
import { NextPage } from "next";
import LargeHeadline from "@/shared/components/LargeHeadline";

const Me: NextPage = () => {
    return (
        <Page title="Kim Avillanosa">
            <Layout>
                <h1>Projects</h1>
            </Layout>
        </Page>
    );
};

export default Me;
