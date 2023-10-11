import Page from "@/shared/components/layout/Page";
import Layout from "@/shared/components/layout/Layout";
import { NextPage } from "next";
import LargeHeadline from "@/shared/components/LargeHeadline";
import Headline from "@/shared/modules/home/Headline";
import QuickBackground from "@/shared/modules/home/QuickBackground";
import WorkProjects from "@/shared/modules/home/Projects";

const Me: NextPage = () => {
    return (
        <Page title="Kim Avillanosa">
            <Layout>
                <Headline />
                <QuickBackground />
                <WorkProjects />
            </Layout>
        </Page>
    );
};

export default Me;
