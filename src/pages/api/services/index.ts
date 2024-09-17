// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<OfferedServices[]>
) {
    res.status(200).json(
        [
            {
                "name": "Custom Software Development",
                "description": "Building tailored software solutions to meet specific business needs and challenges.",
                "imgUrl": "/assets/customdev.png"
            },
            {
                "name": "Web Scraping",
                "description": "Extracting data from websites to gather insights or automate processes.",
                "imgUrl": "/assets/webscraping.png"
            },
            {
                "name": "Backend Development",
                "description": "Creating server-side logic and APIs that power web and mobile applications.",
                "imgUrl": "/assets/backend.png"
            },
            {
                "name": "Database Administration",
                "description": "Managing and optimizing databases to ensure data integrity, security, and performance.",
                "imgUrl": "/assets/dbadmin.png"
            },
            {
                "name": "Internal Automations",
                "description": "Streamlining repetitive tasks and processes to enhance efficiency within an organization.",
                "imgUrl": "/assets/automation.png"
            },
            {
                "name": "Consulting Services",
                "description": "Offering expert advice and guidance on technology solutions and business strategy.",
                "imgUrl": "/assets/consultancy.png"
            }
        ]
    );
}
