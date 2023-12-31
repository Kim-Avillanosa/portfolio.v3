import Page from "@/shared/components/layout/Page";
import Layout from "@/shared/components/layout/Layout";
import { NextPage } from "next";
import LargeHeadline from "@/shared/components/LargeHeadline";
import Headline from "@/shared/modules/home/Headline";
import QuickBackground from "@/shared/modules/home/QuickBackground";
import WorkProjects from "@/shared/modules/home/Projects";
import TechStack from "@/shared/modules/home/Stack";
import ForFun from "@/shared/modules/home/ForFun";

const Me: NextPage = () => {
    return (
        <Page title="Kim Avillanosa">
            <Layout>
                <Headline />
                <div>
                    <QuickBackground />
                    <WorkProjects />
                    {/* <TechStack /> */}
                    <h1 style={{ textAlign: "center", fontSize: "20px" }}>
                        <b>Keep in touch</b>
                    </h1>
                </div>
            </Layout>
        </Page>
    );
};

export default Me;
