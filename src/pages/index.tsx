import Page from "@/shared/components/Page";
import Layout from "@/shared/components/Layout";
import Info from "@/shared/modules/info";
import { Spacer, Grid, Row, Col, Container } from "@nextui-org/react";
import Experience from "@/shared/modules/experience";
import Stack from "@/shared/modules/stack";

export default function Home() {
  return (
    <Page title="Kim Avillanosa">
      <Layout>
        <Grid.Container gap={3} justify="center" >
          <Grid justify="center" xl={6}>
            <Info />
          </Grid>
          <Grid justify="center" xl={6}>
            <Stack />
          </Grid>
        </Grid.Container>
      </Layout>
    </Page>
  );
}
