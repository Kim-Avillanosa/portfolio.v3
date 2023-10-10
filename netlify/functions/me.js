const Me = {
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
  offer: [
    "Front-end Development",
    "Back-end Development",
    "Desktop Applications Development",
    "Web Scraping and other automation",
  ],
};

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(Me),
  };
};
