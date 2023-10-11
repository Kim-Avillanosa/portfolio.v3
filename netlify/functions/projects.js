const Projects = [
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
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(Projects),
  };
};
