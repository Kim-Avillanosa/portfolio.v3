const Stack = [
  {
    name: "C#",
    description:
      "C# (pronounced 'See Sharp') is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.",
    docUrl: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
    imgUrl: "/images/logo/c-sharp.png",
  },
  {
    name: "Typescript",
    description:
      "TypeScript is a strongly typed superset of JavaScript that adds static typing and other features to the language. It was developed by Microsoft and released in 2012 as an open-source programming language. TypeScript is designed to address some of the challenges faced in large-scale JavaScript applications by introducing static types and providing enhanced tooling support.",
    docUrl: "https://www.typescriptlang.org/",
    imgUrl: "/images/logo/typescript.png",
  },
  {
    name: "Javascript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    docUrl: "https://www.javascript.com/",
    imgUrl: "/images/logo/js.png",
  },
  {
    name: ".Net",
    description:
      ".NET is the free, open-source, cross-platform framework for building modern apps and powerful cloud services.",
    docUrl: "https://dotnet.microsoft.com/en-us/",
    imgUrl: "/images/logo/dotnet.png",
  },
  {
    name: "React JS",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    docUrl: "https://react.dev/",
    imgUrl: "/images/logo/react.png",
  },
  {
    name: "Next JS",
    description:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    docUrl: "https://nextjs.org/",
    imgUrl: "/images/logo/nextjs.png",
  },
  {
    name: "Express JS",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    docUrl: "https://expressjs.com/",
    imgUrl: "/images/logo/express.png",
  },
  {
    name: "Next JS",
    description:
      "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    docUrl: "https://nestjs.com/",
    imgUrl: "/images/logo/nestjs.png",
  },
  {
    name: "Redux",
    description:
      "React Redux is a popular library that serves as a bridge between the React UI library and the Redux state management library. It provides a set of tools and bindings to efficiently connect React components to a centralized application state managed by Redux.",
    docUrl: "https://react-redux.js.org/",
    imgUrl: "/images/logo/redux.png",
  },
  {
    name: "Zustand",
    description:
      "Zustand is a state management library for React applications that provides a simple and lightweight solution for managing state without the need for complex abstractions or boilerplate code. It aims to offer a minimalistic API while providing powerful features for state management in a React component tree.",
    docUrl: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    imgUrl: "/images/logo/zustand.png",
  },
  {
    name: "Docker",
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc.",
    docUrl: "https://www.docker.com/",
    imgUrl: "/images/logo/docker.png",
  },
  {
    name: "Docker Compose",
    description:
      "Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.",
    docUrl:
      "https://ttow0130.pages.labranet.jamk.fi/03.-Containerisation/02.docker-compose/",
    imgUrl: "/images/logo/docker-compose.png",
  },
  {
    name: "WPF",
    description:
      "WPF, or Windows Presentation Foundation, is a UI (user interface) framework that creates desktop client applications. The WPF development platform supports a broad set of application development features, including an application model, resources, controls, graphics, layout, data binding, documents, and security.",
    docUrl:
      "https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-wpf?view=vs-2022",
    imgUrl: "/images/logo/wpf.png",
  },
  {
    name: "SQL",
    description:
      "Structured Query Language, is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    docUrl: "https://en.wikipedia.org/wiki/SQL",
    imgUrl: "/images/logo/sql.png",
  },
  {
    name: "Entity Framework",
    description:
      "Entity Framework is a modern object-relation mapper that lets you build a clean, portable, and high-level data access layer with .NET (C#) across a variety of databases, including SQL Database (on-premises and Azure), SQLite, MySQL, PostgreSQL, and Azure Cosmos DB. It supports LINQ queries, change tracking, updates, and schema migrations.",
    docUrl: "https://learn.microsoft.com/en-us/ef/",
    imgUrl: "/images/logo/microsoft.png",
  },
  {
    name: "Web Scraping",
    description:
      "Web scraping is an automated method of extracting valuable information from websites. Instead of manually copying and pasting data, web scraping uses specialized programs or scripts to navigate websites and access their underlying code. By analyzing the code, web scraping identifies specific patterns or elements that contain the desired data, such as text, images, or links.",
    docUrl: "https://en.wikipedia.org/wiki/Web_scraping",
    imgUrl: "/images/logo/default.png",
  },
  {
    name: "MVVM",
    description:
      "MVVM stands for Model-View-ViewModel and is an architectural design pattern commonly used in software development, especially for building user interfaces. It helps to separate concerns and provides a clear structure for designing and maintaining complex applications.",
    docUrl:
      "https://builtin.com/software-engineering-perspectives/mvvm-architecture",
    imgUrl: "/images/logo/microsoft.png",
  },
  {
    name: "Git",
    description:
      "Git is a distributed version control system (VCS) widely used for managing source code and tracking changes in software development projects. It was created by Linus Torvalds in 2005 to manage the development of the Linux kernel, and it has since become one of the most popular VCS options available.",
    docUrl: "https://git-scm.com/",
    imgUrl: "/images/logo/git.png",
  },
  {
    name: "Jenkins",
    description:
      "The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.",
    docUrl: "https://www.jenkins.io/",
    imgUrl: "/images/logo/jenkins.png",
  },
  {
    name: "Outsystems",
    description:
      "OutSystems is a low-code development platform that allows developers to build web and mobile applications rapidly and efficiently. It provides a visual development environment, an integrated set of tools, and a runtime engine to simplify the entire application development lifecycle.",
    docUrl: "https://www.outsystems.com/",
    imgUrl: "/images/logo/outsystems.png",
  },

  {
    name: "Azure",
    description:
      "Azure is a cloud computing platform provided by Microsoft. In simple terms, it's like having a powerful computer on the internet that you can use to store and process your data or run your applications.",
    docUrl: "https://azure.microsoft.com/en-us",
    imgUrl: "/images/logo/azure.png",
  },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(Stack),
  };
};
