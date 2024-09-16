declare global {
  namespace Domain {
    interface Todo {
      id: number;
      value: string;
    }
  }
  type Me = {
    name: string;
    bio: string;
    phone: string;
    email: string;
    address: string;
    education: Education;
    socials: Social;
    offer: string[];
  };

  type Social = {
    github: string;
    linkedIn: string;
    more: string;
  };

  type Education = {
    course: string;
    university: string;
    period: string;
  };

  type Experience = {
    type: "Full-time" | "Part-time" | "Internship" | "Contract";
    company: string;
    companyLogo: string;
    companyAbout: string;
    companyLocation: string;
    position: string;
    responsibilities: string[];
    period: string;
  };

  type TechStack = {
    name: string;
    description: string;
    docUrl: string;
    imgUrl: string;
  };

  type OfferedServices = {
    name: string;
    description: string;
    imgUrl: string;
  };

  type ProjectSource = {
    imgUrl: string;
    projectUrl: string;
  };

  type Project = {
    title: string;
    description: string;
    bannerUrl: string;
    sources: ProjectSource[];
  };
}

export default global;
