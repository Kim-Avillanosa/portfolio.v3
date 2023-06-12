import Head from "next/head";
import { ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Page;
