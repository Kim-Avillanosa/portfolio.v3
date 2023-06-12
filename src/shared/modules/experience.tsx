import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { Badge, Loading, Spacer, Container, Grid } from "@nextui-org/react";
import Link from "next/link";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  const { data, isLoading } = useSWR<Experience[]>(`/api/experience`, fetcher);

  if (isLoading) return <Loading>Please wait</Loading>;

  return (
    <Grid>
      {data?.map((item, idx) => {
        return (
          <div key={idx}>
            <h5>
              <strong> {item.company}</strong>{" "}
              <Badge size={"xs"} color="success">
                {item.type}
              </Badge>
            </h5>
            <p>
              {item.position} - {item.period}
            </p>
            <ul>
              {item.responsibilities.map((responsibility, rItem) => {
                return (
                  <li key={rItem}>
                    <small>{responsibility}</small>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Grid>
  );
};

export default Experience;
