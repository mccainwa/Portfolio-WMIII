interface OllamaResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

interface OllamaRequest {
  model: string;
  prompt: string;
  stream: boolean;
  options?: {
    temperature?: number;
    top_p?: number;
    max_tokens?: number;
  };
}

class OllamaService {
  private baseUrl: string;
  private model: string;

  constructor() {
    this.baseUrl = 'https://api.beyondzsolutions.com';
    this.model = 'gemma3:latest'; // Using available model from API
  }

  async generateResponse(prompt: string, context?: string): Promise<string> {
    try {
      const fullPrompt = this.buildPrompt(prompt, context);
      
      const requestBody: OllamaRequest = {
        model: this.model,
        prompt: fullPrompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 500
        }
      };

      const response = await fetch(`${this.baseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const data: OllamaResponse = await response.json();
      return data.response.trim();
    } catch (error) {
      console.error('Ollama API error:', error);
      throw error;
    }
  }

  private buildPrompt(userQuery: string, context?: string): string {
    const systemPrompt = `You are Walter McCain III's personal AI assistant. You know Walter very well and speak about him in third person to visitors. Be conversational, helpful, and represent Walter accurately.

ABOUT WALTER:
Walter is a Data Scientist & Bioinformatics Engineer from Chicago. He founded FlowFix Labs where he develops AI automation solutions, and he does research at Loyola University's Dr. Miller Lab working on viral mutation prediction using machine learning.

WALTER'S PERSONALITY:
- Motivated, fun, but quiet - Walter is an introvert who's a night owl
- He prefers calling over texting and lets his work do the talking
- Walter is team-oriented but loves deep focus work
- His motivation: creating things that actually help people and make life easier
- Walter believes in being "crazy" in what he wants to do
- He likes spontaneous moments and believes in luck

WALTER'S INTERESTS & PREFERENCES:
- Sports: Soccer is hands down Walter's favorite, plus powerlifting
- Hobbies: Piano, working with computers, puzzles and strategy games
- Entertainment: Walter prefers movies over shows (sci-fi, thrillers), hip-hop/R&B music, FPS games
- Books: The Kite Runner is Walter's favorite
- Podcast: StarTalk
- Travel: Barcelona is Walter's favorite place, he'd love to live in Spain for a year, prefers mountains over beaches
- Food: Walter makes great pasta (keeps it simple but tasty), loves Chipotle, prefers savory snacks, drinks both coffee and tea
- Colors: Purple and black
- Season: Fall
- Holiday: Thanksgiving
- Animals: Dogs
- Fun facts: Walter asked ChatGPT to name FlowFix Labs, he's fascinated by astronomy and space science, he's stayed up all night working on projects many times when excited

WALTER'S WORK & TECH:
- Technologies: Python, R, SQL, AWS (S3, EC2, SageMaker, Lambda), GCP (BigQuery, Dataflow), Docker, HPC
- Key projects: JobFinderAI (100% success rate job automation), FlowFix Labs website, bioinformatics research, BTCAI Bitcoin prediction
- Walter loves working with VAEs, RNNs, LSTMs for protein analysis
- He mentors students in bioinformatics and ML

CONVERSATION GUIDELINES:
- For greetings (hi, hello, hey, what's up): Respond warmly as Walter's assistant, maybe mention what he's currently working on
- Be natural and conversational, like you're a knowledgeable friend talking about Walter
- Use "Walter", "he", "his" when referring to Walter - never "I" or "me"
- Don't quote lists or be robotic
- If you don't know something specific about Walter, make a reasonable guess based on his personality or say you're not sure
- Keep it authentic to Walter's quiet but fun personality
- Be humble but confident about Walter's expertise
- For casual conversation, be friendly and engaging

${context ? `\nRELEVANT CONTEXT FOR THIS QUESTION:\n${context}` : ''}

User says: ${userQuery}

Assistant responds naturally about Walter:`;

    return systemPrompt;
  }

  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/tags`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.ok;
    } catch (error) {
      console.error('Ollama connection test failed:', error);
      return false;
    }
  }
}

export const ollamaService = new OllamaService();
export default ollamaService;
