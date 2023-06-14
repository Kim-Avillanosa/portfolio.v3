import Layout from "@/shared/components/Layout";
import Page from "@/shared/components/Page";
import { Grid, Input, Textarea } from "@nextui-org/react";
import { NextPage } from "next";

import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  message: yup.string().required("Message is required"),
});

const Contact: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await schema.validate(data, { abortEarly: false });
      console.log(data); // Replace with your form submission logic
    } catch (validationErrors) {
      console.log(validationErrors);
    }
  };

  return (
    <Page title="Contact Me">
      <Layout>
        <form name="contact" method="POST" data-netlify="true">
          <Grid.Container gap={3}>
            <Grid>
              <Input
                label="Email Address"
                placeholder="account@job.com"
                type="email"
                name="email"
              />
            </Grid>
            <Grid>
              <Textarea
                label="Message"
                placeholder="account@job.com"
                name="message"
              />
            </Grid>
            <Grid>
              <button type="submit">Send</button>
            </Grid>
          </Grid.Container>
        </form>
      </Layout>
    </Page>
  );
};

export default Contact;
