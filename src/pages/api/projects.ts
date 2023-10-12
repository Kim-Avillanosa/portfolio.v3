// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json([
    {
      title: "BidBox",
      description: "A sample web app that handles item auctions",
      bannerUrl: "/assets/bidbox.png",
      sources: [
        {
          imgUrl: "/assets/swagger.png",
          projectUrl: "https://bidbox-auction-api.vercel.app/swagger",
        },
        {
          imgUrl: "/assets/github.png",
          projectUrl: "https://github.com/Kim-Avillanosa/bidbox-auction-app",
        },
        {
          imgUrl: "/assets/code.png",
          projectUrl: "https://bidbox-auction-web-app.vercel.app",
        },
      ],
    },
    {
      title: "NextLaunch",
      description: "PWA Boilerplate built along NextJS 🚀🚀🚀",
      bannerUrl: "/assets/banner.png",
      sources: [
        {
          imgUrl: "/assets/npm.png",
          projectUrl: "https://www.npmjs.com/package/@kmavillanosa/nextlaunch",
        },
        {
          imgUrl: "/assets/github.png",
          projectUrl: "https://github.com/Kim-Avillanosa/nextlaunch",
        },
        {
          imgUrl: "/assets/code.png",
          projectUrl: "https://kmavillanosa-nextlaunch.netlify.app/",
        },
      ],
    },

    {
      title: "TonerHaven",
      description: "An E-Commerce platform that sells printer supplies",
      bannerUrl: "/assets/tonerhaven.png",
      sources: [
        {
          imgUrl: "/assets/github.png",
          projectUrl: "https://github.com/tonerhaven-tools/tonerhaven-webapp",
        },
        {
          imgUrl: "/assets/code.png",
          projectUrl: "https://tonerhaven.netlify.app",
        },
      ],
    },
  ]);
}
