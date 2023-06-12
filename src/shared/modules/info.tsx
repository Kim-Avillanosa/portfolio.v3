import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Link from "next/link";
import { Spacer, Text, Loading, Grid } from "@nextui-org/react";
import Stack from "./stack";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  const { data, isLoading } = useSWR<Me>(`/api/me`, fetcher);

  if (isLoading) return <Loading>Please wait</Loading>;

  return (
    <Grid >
      <div>
        <Link target="_blank" href={data?.socials.github ?? ""}>
          <img alt="github" height={20} src="/images/socials/github.png" />
        </Link>
        <Link
          target="_blank"
          style={{ margin: "10px" }}
          href={data?.socials.linkedIn ?? ""}
        >
          <img
            alt="linkedin"
            height={20}
            src="/images/socials/linkedin.png"
          />
        </Link>
        <Link target="_blank" href={data?.socials.more ?? ""}>
          <img
            alt="linktree"
            height={20}
            src="/images/socials/linktree.png"
          />
        </Link>
      </div>
      <Text as="h2">
        <strong>{data?.name}</strong>
      </Text>
      
      <div>
        <p>{data?.bio}</p>
        <p>{data?.email}</p>
        <p>{data?.phone}</p>
        <p>{data?.address}</p>
      </div>
      <Spacer />
      <div>
        <strong>Education</strong>
        <p>{data?.education.university}</p>
        <p>{data?.education.course}</p>
        <p>{data?.education.period}</p>
      </div>
      <Spacer />
      <div>
        <strong>What I can offer</strong>
        <ul>
          {data?.offer.map((item,idx)=> <li key={idx}>{item}</li>)}
        </ul>
      </div>

     
     
    </Grid>
  );
};

export default Info;
