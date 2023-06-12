// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Me>) {
  res.status(200).json({
    name: "Kim Cyriel S. Avillanosa",
    email: "careers.kmavillanosa@gmail.com",
    phone: "+63-945-287-3791",
    bio: "Senior Software Engineer (Full Stack)",
    address:
      "258-A Manalo Extension Bgy Milagrosa, Puerto Princesa City Palawan, Philippines",
    education: {
      university: "Palawan State University",
      course: "Bachelor of Science in Information Technology",
      period: "2011-2016",
    },
    socials: {
      github: "https://github.com/kmavillanosa",
      linkedIn: "https://www.linkedin.com/in/kmavillanosa",
      more: "https://linktr.ee/kmavillanosa",
    },
    offer : ["Front-end Development", "Back-end Development", "Desktop Applications Development", "Web Scraping and other automation"]
  });
}
