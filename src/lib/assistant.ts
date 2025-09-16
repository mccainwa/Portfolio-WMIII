import ollamaService from './ollamaService';

interface AssistantResponse {
  answer: string;
  sources: string[];
}

// Knowledge base about Walter McCain III (kept for reference but not used with Ollama)
/*
const knowledgeBase = {
  personal: {
    name: "Walter McCain III",
    title: "Data Scientist | Bioinformatics | Cloud & AI Automation",
    location: "Chicago, IL",
    email: "Param2002@outlook.com",
    linkedin: "https://linkedin.com/in/waltermccainiii",
    github: "https://github.com/mccainwa",

    // Personal traits and characteristics
    personality: {
      traits: ["Motivated", "Fun", "Quiet"],
      workStyle: "Team-oriented but enjoys deep focus work",
      motivation: "Creating things that actually help people and make life easier",
      communication: "Prefers calling over texting, lets work do the talking rather than public speaking",
      schedule: "Night owl",
      personalityType: "Introvert"
    },

    interests: {
      sports: "Soccer (hands down favorite), powerlifting",
      hobbies: ["Piano", "Working with computers", "Puzzles and strategy games"],
      entertainment: {
        favoriteBook: "The Kite Runner",
        favoritePodcast: "StarTalk",
        moviePreference: "Movies over shows - likes being fully immersed in a story",
        favoriteGenres: ["Sci-fi", "Thrillers"],
        musicTaste: "Hip-hop and R&B, but mixes in a little of everything",
        gaming: "Yes! Any FPS game"
      },
      travel: {
        favoritePlace: "Barcelona",
        dreamDestination: "Spain (would live there for a year)",
        preference: "Mountains over beaches or cities",
        style: "With friends and family, enjoys road trips with music playlists"
      },
      lifestyle: {
        beverages: "Both coffee and tea",
        favoriteMeal: "Dinner",
        cookingSkill: "Pasta - keeps it simple but tasty",
        snackPreference: "Savory",
        fastFood: "Chipotle",
        colors: ["Purple", "Black"],
        season: "Fall",
        holiday: "Thanksgiving",
        animals: "Dogs"
      }
    },

    funFacts: {
      inspiration: "Love for technology from his dad when younger, plus time working and volunteering at hospitals made him want to do something in healthcare",
      flowFixName: "Asked ChatGPT… shhh, don't tell though",
      astronomy: "Always been fascinated by astronomy and space science — will spend hours watching space documentaries",
      careerAdvice: "Be 'crazy' in what you want to do",
      proudestProject: "Building automation tools and bioinformatics pipelines that actually solved real problems",
      beliefs: "Believes in luck",
      superpower: "The power to control space/time",
      planning: "Likes spontaneous moments",
      collecting: "Not seriously, but likes keeping old tech gear",
      languages: "Enjoys learning new languages but not fluent in any besides English",
      timeTravel: "Would go to the future",
      lottery: "Would travel - Spain would probably be the first stop",
      skillToLearn: "Fluency in another language",
      famousPerson: "Elon Musk - would like to pick his brain on innovation",
      movieTitle: "Quietly Building, Loudly Dreaming",
      quirks: {
        pineapplePizza: "Yes",
        rollerCoasters: "Yes",
        allNighters: "Many times, especially when excited about building something new",
        mostUsedEmoji: "😂",
        dancing: "Sometimes, when nobody's watching"
      }
    }
  },
  
  experience: {
    flowfixLabs: {
      role: "Founder & Automation Engineer",
      company: "FlowFix Labs",
      description: "Develops AI-driven automation solutions and cloud pipelines that transform how businesses and researchers approach complex data challenges.",
      technologies: ["AI Automation", "Cloud Pipelines", "Business Process Automation"],
    },
    loyolaResearch: {
      role: "Research Assistant",
      company: "Loyola University - Dr. Miller's Lab",
      description: "Develops ML pipelines for protein mutation prediction using advanced models like VAEs, RNNs, and LSTMs. Optimizes high-performance computing workflows and mentors students in bioinformatics and machine learning methodologies.",
      technologies: ["VAE", "RNN", "LSTM", "HPC", "Bioinformatics", "Machine Learning"],
    },
    kumonManagement: {
      role: "Management Position",
      company: "Kumon",
      description: "Focused on automation and operational efficiency improvements.",
      technologies: ["Process Automation", "Operational Efficiency"],
    },
  },

  projects: {
    jobFinderAI: {
      name: "JobFinderAI",
      description: "AI-powered job application automation system with bulletproof reliability. Features automatic job finding across 15+ platforms, smart form filling, and AI-generated cover letters with 100% success rate.",
      technologies: ["Python", "AI", "Automation", "Streamlit", "Selenium", "Web Scraping"],
      type: "AI Automation Tool",
    },
    automatedDatasetExplorer: {
      name: "Automated Dataset Explorer",
      description: "Streamlit app for automated ML dataset exploration with SHAP visualizations. Enables rapid insights through automated model training and explainability analysis.",
      technologies: ["Python", "Streamlit", "Machine Learning", "SHAP", "Data Analysis"],
      type: "Data Science Tool",
    },
    drMillerLabMP: {
      name: "Dr. Miller Lab Research Project",
      description: "Bioinformatics research project for protein mutation analysis and prediction using machine learning techniques at Loyola University.",
      technologies: ["Python", "Bioinformatics", "Research", "Machine Learning", "Protein Analysis"],
      type: "Research Project",
    },
    btcAI: {
      name: "BTCAI - Bitcoin Price Prediction",
      description: "Machine learning models for Bitcoin price prediction using linear and logistic regression with time series analysis and trend decomposition.",
      technologies: ["Python", "Machine Learning", "Time Series", "Financial Analysis", "Regression"],
      type: "Financial ML Project",
    },
    flowFixLabsWebsite: {
      name: "FlowFix Labs Website",
      description: "Professional company website with modern design and GitHub Pages deployment showcasing automation and AI services.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"],
      type: "Web Development",
    },
    proteomeAACAnalysis: {
      name: "Proteome-AAC-Analysis",
      description: "Advanced proteome analysis using amino acid composition methods for protein classification and functional prediction. Features bioinformatics algorithms and machine learning approaches.",
      technologies: ["Python", "Bioinformatics", "Proteomics", "Machine Learning", "Research"],
      type: "Bioinformatics Research",
    },
  },

  skills: {
    programming: ["Python", "R", "SQL"],
    cloud: ["AWS (S3, EC2, SageMaker, Lambda)", "GCP (BigQuery, Dataflow)"],
    tools: ["Docker", "HPC", "Machine Learning frameworks"],
    specialties: ["Bioinformatics", "Scientific Computing", "AI Automation"],
    platforms: ["Google Workspace", "Power Platform"],
  },

  funFacts: [
    "Has a passion for bridging the gap between scientific research and practical business applications",
    "Enjoys mentoring students in bioinformatics and machine learning",
    "Loves working with cutting-edge ML models like VAEs and LSTMs",
    "Always looking for ways to optimize and automate complex workflows",
    "Believes in the power of data to drive scientific discovery",
  ],
}; */

// Common personal questions and answers (kept for reference but not used with Ollama)
/*
const personalQA = [
  {
    question: "What inspired you to get into bioinformatics and data science?",
    answer: "My love for technology when I was younger that I got through my dad, and also my time working and volunteering at hospitals made me want to do something in healthcare."
  },
  {
    question: "How did you come up with the name FlowFix Labs?",
    answer: "Asked ChatGPT… shhh, don't tell though."
  },
  {
    question: "If you had to describe yourself in three words, what would they be?",
    answer: "Motivated, Fun, Quiet."
  },
  {
    question: "What's a fun fact about you that most people don't know?",
    answer: "I've always been fascinated by astronomy and space science — I'll spend hours watching space documentaries."
  },
  {
    question: "Do you play any instruments or have a creative hobby?",
    answer: "I love soccer, powerlifting, piano, and working with computers."
  },
  {
    question: "What's your favorite book or podcast?",
    answer: "Book: The Kite Runner. Podcast: StarTalk."
  },
  {
    question: "Which sport or activity do you enjoy the most?",
    answer: "Soccer, hands down."
  },
  {
    question: "Do you like video games? If so, what's your go-to?",
    answer: "Yes! Any FPS game."
  },
  {
    question: "Do you enjoy movies or shows more?",
    answer: "Movies — I like being fully immersed in a story."
  },
  {
    question: "What's your favorite place you've ever visited?",
    answer: "Barcelona."
  },
  {
    question: "Do you prefer mountains, beaches, or cities?",
    answer: "Mountains."
  },
  {
    question: "If you could live anywhere in the world for a year, where would it be?",
    answer: "Spain."
  },
  {
    question: "Do you enjoy traveling solo or with friends/family?",
    answer: "Definitely with friends and family."
  },
  {
    question: "Do you enjoy road trips?",
    answer: "Yes, I like the freedom and music playlists along the way."
  },
  {
    question: "Coffee or tea?",
    answer: "Both."
  },
  {
    question: "What's your favorite meal of the day?",
    answer: "Dinner."
  },
  {
    question: "Do you like cooking, and if so, what's your signature dish?",
    answer: "I'd say pasta — I keep it simple but tasty."
  },
  {
    question: "Do you prefer sweet or savory snacks?",
    answer: "Savory."
  },
  {
    question: "What's your go-to fast food?",
    answer: "Chipotle."
  },
  {
    question: "Favorite color?",
    answer: "Purple and black."
  },
  {
    question: "Favorite season of the year?",
    answer: "Fall."
  },
  {
    question: "Favorite holiday?",
    answer: "Thanksgiving."
  },
  {
    question: "Favorite type of music?",
    answer: "Hip-hop and R&B, but I mix in a little of everything."
  },
  {
    question: "Favorite type of movie?",
    answer: "Sci-fi or thrillers."
  },
  {
    question: "Do you prefer cats or dogs?",
    answer: "Dogs."
  },
  {
    question: "Do you believe in luck?",
    answer: "Yes."
  },
  {
    question: "If you could have any superpower, what would it be?",
    answer: "The power to control space/time."
  },
  {
    question: "Do you like surprises, or do you prefer to plan everything?",
    answer: "I like spontaneous moments."
  },
  {
    question: "Do you collect anything?",
    answer: "Not seriously, but I like keeping old tech gear."
  },
  {
    question: "What's the best advice you've received in your career?",
    answer: "Be 'crazy' in what you want to do."
  },
  {
    question: "Do you prefer working alone or on a team?",
    answer: "Team."
  },
  {
    question: "What motivates you to keep pushing forward?",
    answer: "I want to create things that actually help people and make life easier."
  },
  {
    question: "What's been your proudest project so far?",
    answer: "Building my automation tools and bioinformatics pipelines that actually solved real problems."
  },
  {
    question: "Do you enjoy public speaking?",
    answer: "Not really — I'd rather let my work do the talking."
  },
  {
    question: "Morning person or night owl?",
    answer: "Night owl."
  },
  {
    question: "Introvert, extrovert, or ambivert?",
    answer: "Introvert."
  },
  {
    question: "Do you like puzzles or strategy games?",
    answer: "Yes, very much so."
  },
  {
    question: "Do you prefer texting or calling?",
    answer: "Calling."
  },
  {
    question: "Do you enjoy learning new languages?",
    answer: "Yes, but I'm not fluent in any besides English."
  },
  {
    question: "If you could time travel, would you go to the past or future?",
    answer: "Future."
  },
  {
    question: "If you won the lottery, what would you do first?",
    answer: "Travel — Spain would probably be my first stop."
  },
  {
    question: "If you could instantly learn a skill, what would it be?",
    answer: "Fluency in another language."
  },
  {
    question: "If you could meet anyone famous, who would it be?",
    answer: "Elon Musk — I'd like to pick his brain on innovation."
  },
  {
    question: "If your life were a movie, what would the title be?",
    answer: "Quietly Building, Loudly Dreaming."
  },
  {
    question: "Pineapple on pizza: yes or no?",
    answer: "Yes."
  },
  {
    question: "Do you like roller coasters?",
    answer: "Yes."
  },
  {
    question: "Have you ever stayed up all night working on a project?",
    answer: "Many times, especially when I'm excited about building something new."
  },
  {
    question: "What emoji do you use the most?",
    answer: "😂"
  },
  {
    question: "Do you dance when nobody's watching?",
    answer: "Sometimes."
  }
]; */



// Helper function to build context from personal Q&A
function buildPersonalContext(query: string): string {
  const lowerQuery = query.toLowerCase();

  // Handle greetings and casual conversation
  if (lowerQuery.match(/^(hi|hello|hey|what's up|whats up|sup|howdy|good morning|good afternoon|good evening)[\s\W]*$/i) ||
      lowerQuery.includes("how are you") || lowerQuery.includes("how's it going") || lowerQuery.includes("how are things")) {
    return "Walter is currently working on AI automation projects at FlowFix Labs and bioinformatics research at Loyola University. He's passionate about his work and enjoys casual conversation.";
  }

  // Build contextual information based on query topic - NO DIRECT QUOTES
  let context = "Walter McCain III context: ";

  // Personal preferences and lifestyle
  if (lowerQuery.includes("color") || lowerQuery.includes("favourite") || lowerQuery.includes("favorite")) {
    context += "Favorite colors are purple and black. ";
  }

  if (lowerQuery.includes("food") || lowerQuery.includes("eat") || lowerQuery.includes("cook")) {
    context += "Loves making pasta (keeps it simple but tasty), go-to fast food is Chipotle, prefers savory snacks, drinks both coffee and tea. ";
  }

  if (lowerQuery.includes("sport") || lowerQuery.includes("soccer") || lowerQuery.includes("exercise")) {
    context += "Soccer is hands-down favorite sport, also does powerlifting. ";
  }

  if (lowerQuery.includes("music") || lowerQuery.includes("song")) {
    context += "Listens to hip-hop and R&B but mixes in a little of everything. ";
  }

  if (lowerQuery.includes("movie") || lowerQuery.includes("film") || lowerQuery.includes("show")) {
    context += "Prefers movies over shows, likes being fully immersed in a story, enjoys sci-fi and thriller genres. ";
  }

  if (lowerQuery.includes("book") || lowerQuery.includes("read")) {
    context += "Favorite book is The Kite Runner. ";
  }

  if (lowerQuery.includes("travel") || lowerQuery.includes("place") || lowerQuery.includes("vacation")) {
    context += "Barcelona is favorite place, would love to live in Spain for a year, prefers mountains over beaches or cities. ";
  }

  if (lowerQuery.includes("hobby") || lowerQuery.includes("free time") || lowerQuery.includes("fun")) {
    context += "Plays piano, loves working with computers, enjoys puzzles and strategy games, plays FPS games. ";
  }

  if (lowerQuery.includes("personality") || lowerQuery.includes("describe") || lowerQuery.includes("trait")) {
    context += "Describes himself as motivated, fun, and quiet. Introvert and night owl who prefers calling over texting. ";
  }

  // Professional context
  if (lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("company")) {
    context += "Founded FlowFix Labs (AI automation solutions), does research at Loyola University's Dr. Miller Lab on viral mutation prediction. ";
  }

  if (lowerQuery.includes("tech") || lowerQuery.includes("programming") || lowerQuery.includes("code")) {
    context += "Works with Python, R, SQL, AWS, GCP, machine learning, and bioinformatics. Loves working with VAEs, RNNs, and LSTMs. ";
  }

  // Add general background if no specific context found
  if (context === "Walter McCain III context: ") {
    context += "Data Scientist & Bioinformatics Engineer, founder of FlowFix Labs, researcher at Loyola University.";
  }

  return context.trim();
}

export async function getAssistantResponse(query: string): Promise<AssistantResponse> {
  try {
    // Test if Ollama service is available
    const isOllamaAvailable = await ollamaService.testConnection();

    if (isOllamaAvailable) {
      // Use Ollama for intelligent responses
      const context = buildPersonalContext(query);
      const response = await ollamaService.generateResponse(query, context);

      return {
        answer: response,
        sources: ["AI Assistant (Ollama)"],
      };
    } else {
      // Fallback to enhanced keyword matching
      return getFallbackResponse(query);
    }
  } catch (error) {
    console.error('Assistant error:', error);
    // Fallback to keyword matching if Ollama fails
    return getFallbackResponse(query);
  }
}

// Enhanced fallback function for when Ollama is unavailable
function getFallbackResponse(query: string): AssistantResponse {
  const lowerQuery = query.toLowerCase();

  // Handle greetings and casual conversation
  if (lowerQuery.match(/^(hi|hello|hey|what's up|whats up|sup|howdy|good morning|good afternoon|good evening)[\s\W]*$/i) ||
      lowerQuery.includes("how are you") || lowerQuery.includes("how's it going") || lowerQuery.includes("how are things")) {
    const greetings = [
      "Hey there! Walter's doing well, just working on some projects at FlowFix Labs. How are you doing?",
      "Hi! Walter's been busy with the usual - working on AI automation stuff and bioinformatics research. What's going on with you?",
      "Hello! Walter's good, he's been diving deep into some machine learning models lately. How's your day going?",
      "Hey! Walter's doing great - he just finished up some work on protein mutation prediction. What brings you here today?",
      "Hi there! Walter's well, he's been coding and working on some automation solutions. How are things with you?"
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return {
      answer: randomGreeting,
      sources: ["Personal Conversation"],
    };
  }

  // Natural responses for common questions - NO QUOTING
  if (lowerQuery.includes("favorite") && lowerQuery.includes("color")) {
    return {
      answer: "Purple and black are my favorite colors. I've always been drawn to those - they just feel right to me.",
      sources: ["Personal Preferences"],
    };
  }

  if (lowerQuery.includes("favorite") && lowerQuery.includes("movie")) {
    return {
      answer: "I'm really into sci-fi and thriller movies. I prefer movies over shows because I like being fully immersed in a story from start to finish.",
      sources: ["Personal Preferences"],
    };
  }

  if (lowerQuery.includes("favorite") && (lowerQuery.includes("food") || lowerQuery.includes("eat"))) {
    return {
      answer: "Chipotle is my go-to for fast food, and I make a mean pasta dish - I keep it simple but tasty. I'm definitely more of a savory snacks person than sweet.",
      sources: ["Personal Preferences"],
    };
  }

  if (lowerQuery.includes("hobby") || lowerQuery.includes("hobbies") || lowerQuery.includes("fun")) {
    return {
      answer: "Soccer is hands down my favorite sport, and I also do powerlifting. I love playing piano, working with computers, and I'm into puzzles and strategy games. Oh, and FPS games are my jam!",
      sources: ["Personal Interests"],
    };
  }

  if (lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("career")) {
    return {
      answer: "I'm a Data Scientist and Bioinformatics Engineer. I founded FlowFix Labs where we develop AI automation solutions, and I also do research at Loyola University's Dr. Miller Lab working on viral mutation prediction using machine learning.",
      sources: ["Professional Background"],
    };
  }

  if (lowerQuery.includes("music") || lowerQuery.includes("song")) {
    return {
      answer: "I'm really into hip-hop and R&B, but honestly I mix in a little of everything depending on my mood.",
      sources: ["Personal Preferences"],
    };
  }

  if (lowerQuery.includes("travel") || lowerQuery.includes("place")) {
    return {
      answer: "Barcelona is my favorite place I've been to. I'd actually love to live in Spain for a year sometime. I'm more of a mountains person than beaches or big cities.",
      sources: ["Personal Preferences"],
    };
  }

  // Default response - natural and conversational
  const responses = [
    "Hey! I'm not sure exactly what you're asking, but feel free to ask me about Walter's hobbies, work, favorite things, or really anything you're curious about!",
    "Hmm, I'm not quite sure how to answer that one. Want to ask me about Walter's soccer interests, his work at FlowFix Labs, or maybe what he likes to do for fun?",
    "I'm not sure I caught that - could you ask me something else? I'm happy to talk about Walter's projects, hobbies, or whatever you're curious about!",
    "That's an interesting question! I'm not sure how to answer it, but I'm open to talking about pretty much anything related to Walter - work, hobbies, favorites, you name it.",
    "I'm not quite sure about that one. Feel free to ask me about Walter's research, his company FlowFix Labs, or just random stuff about him!",
    "Hmm, I'm drawing a blank on that one. Want to try asking about something else related to Walter? He's pretty open about most things! 😊"
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  return {
    answer: randomResponse,
    sources: ["Personal Assistant"],
  };
}
