type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Pooja Deep — Portfolio",
    fullName: "Pooja Deep",
    email: "poojadeep684@gmail.com",
  },
  hero: {
    name: "Pooja Deep",
    p: ["I build backend systems and", "AI-powered APIs with Java & Spring Boot"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Backend Developer and final-year Computer Science
      student at the University of Karachi (DCS-UBIT), specializing in Java,
      Spring Boot, and REST API development. I've built and deployed
      production-style systems with Spring Security, JWT/OAuth 2.0,
      MySQL, Docker, and CI/CD pipelines — including a live API deployed
      on Railway. I also work with Python and AI integration (Google
      Gemini, OpenAI API) for intelligent backend features. I'm seeking
      an entry-level Backend Developer role where I can bring strong
      problem-solving skills and a track record of shipping real, working
      systems.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my backend development
      skills through real-world systems — from a fully secured REST API
      with JWT and OAuth 2.0 to an AI-powered document analysis platform.
      Each project includes links to the code and, where available, a
      live deployed demo.`,
    },
  },
};