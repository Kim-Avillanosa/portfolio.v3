import useSWR from "swr";
import fetcher from "../utils/fetcher";
import {
  Avatar,
  Loading,
  Tooltip,
  Button,
  Grid,
  Card,
  Text,
} from "@nextui-org/react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { useRouter } from "next/router";

interface StackProps {}

interface StackDetailsProps {
  stack: TechStack;
}

const StackDetails: React.FC<StackDetailsProps> = ({ stack }) => {
  return (
    <Card
      style={{
        maxWidth: "300px",
      }}
    >
      <Card.Header>
        <Avatar
          style={{ margin: "5px" }}
          size="lg"
          borderWeight="bold"
          bordered
          stacked
          squared
          src={stack.imgUrl}
        />
        <strong>{stack.name}</strong>
      </Card.Header>
      <Card.Body>
        <Text>{stack.description}</Text>
      </Card.Body>
      <Card.Footer>
        <Link target="_blank" href={stack.docUrl}>
          View Documentation
        </Link>
      </Card.Footer>
    </Card>
  );
};

const Stack: React.FC<StackProps> = () => {

  const { data, isLoading } = useSWR<TechStack[]>(`/api/stack`, fetcher);

  if (isLoading) return <Loading>Please wait</Loading>;

  return (
    <Grid>
      <Grid>
        <h4>
          <strong>Tech Stack</strong>
        </h4>
      </Grid>
      <Grid>
        <Grid.Container
          justify="center"
          gap={2}
          css={{ color: "$text", maxWidth: "400px" }}
        >
          {data?.map((item, idx) => (
            <Grid key={idx}>
              <Tooltip
                placement="bottom"
                slot="end"
                shadow={false}
                content={<StackDetails stack={item} />}
              >
                <Avatar
                  size="lg"
                  borderWeight="bold"
                  bordered
                  stacked
                  squared
                  src={item.imgUrl}
                />
              </Tooltip>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </Grid>
  );
};

export default Stack;
