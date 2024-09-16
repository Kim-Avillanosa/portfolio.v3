import Page from "@/shared/components/layout/Page";
import Layout from "@/shared/components/layout/Layout";
import { NextPage } from "next";
import Headline from "@/shared/modules/home/Headline";
import QuickBackground from "@/shared/modules/home/QuickBackground";
import TechStack from "@/shared/modules/home/Stack";

const Me: NextPage = () => {
    return (
        <Page title="Kim Avillanosa">
            <Layout>
                <Headline />
                <div>
                <TechStack />
                    <QuickBackground />
                    <h1 style={{ textAlign: "center", fontSize: "35px" }}>
                        <b>Get in touch.</b>
                    </h1>
                </div>
            </Layout>
        </Page>
    );
};

export default Me;
