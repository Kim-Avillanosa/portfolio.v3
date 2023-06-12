// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Experience[]>
) {
  res.status(200).json([
    {
      type: "Part-time",
      company: "Palawan Express Pera Padala",
      companyAbout: "One of the leading financial services in the Philippines.",
      companyLocation: "Puerto Princesa City, Palawan",
      companyLogo: "/images/pps.png",
      position: "Software Engineer",
      period: "June 2023 - Current",
      responsibilities: [
        "Handling maintainance on legacy systems",
        "Providing technical advice",
      ],
    },
    {
      type: "Contract",
      company: "Yondu.inc",
      companyAbout:
        "Yondu is a top IT solutions company wholly owned by Globe. It helps enterprises scale in the new digital economy by providing industry-standard, secure, and scalable solutions that create happier technological experiences. Yondu’s top-notch technology solutions include Custom Software Development, Managed IT Services, Cloud Business Solutions, Messaging Gateways, Business Productivity and Ready-to-Use Platforms.",
      companyLocation: "Puerto Princesa City, Palawan",
      companyLogo: "/images/yondu.png",
      position: "Senior Software Engineer (Full Stack)",
      period: "March 2022 - Current",
      responsibilities: [
        "Deployed Under (Morphsys inc) Corus Consulting and Applus+",
        "Develop solutions on both backend and frontend",
        "In charge of handling the software architecture and managing the right standards",
        "Manages software documents",
      ],
    },
    {
      type: "Full-time",
      company: "Palawan Express Pera Padala",
      companyAbout: "One of the leading financial services in the Philippines.",
      companyLocation: "Puerto Princesa City, Palawan",
      companyLogo: "/images/pps.png",
      position: "Software Engineer",
      period: "March 2018 - March 2022",
      responsibilities: [
        "Developed Web Services using standard practices such as Clean Architecture, CQRS and IOC.",
        "Handled Integrations for Desktop and Web Applications and applied design patterns for it to be readable and maintainable.",
        "Assist co-developers and provide guidance when needed. Oversee assigned tasks of other team members and provide more efficient solutions.",
        "Collaborated with Business Analysts and QA Testers during project planning and development phase.",
        "Provided documentations and guides for the system administrators to review.",
        "Provided projects with Unit Tests.",
        "Handled deployments, maintenance and troubleshooting of APIs and Web Apps.",
      ],
    },
    {
      type: "Full-time",
      company: "International Payments Processing Incorporated. (IPP)",
      companyAbout:
        "International Payments Processing (IPP) is a boutique firm that delivers a full suite of payment processing solutions to high-risk small business merchants nationally and internationally.",
      companyLocation: "Puerto Princesa City, Palawan",
      position: "Programmer",
      companyLogo: "/images/ipp.png",

      period: "December 2016 - March 2018",
      responsibilities: [
        "Served as a member of the Research and Development department, developed desktop applications and software tools that complies the requests of clients and other departments in the company.",
        "Developed tools for data extraction and automation. ",
        "Assisted Data analysts on their weekly reports.",
      ],
    },
    {
      type: "Internship",
      company:
        "Management Information Systems Division, City Government of Puerto Princesa",
      companyAbout:
        "IT Department of Puerto Princesa City Hall, Palawan Philippines",
      companyLocation: "Puerto Princesa City, Palawan",
      position: "IT Support Intern",
      companyLogo: "/images/ppc.png",

      period: "November 2015 - February 2016",
      responsibilities: [
        "Handled and maintained computer hardware and network connections for the employees of the City Government of Puerto Princesa",
      ],
    },
  ]);
}
