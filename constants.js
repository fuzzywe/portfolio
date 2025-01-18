// Custom chatbot code for Janani's portfolio

const userIntro = `Hello! I am Janani, currently pursuing an integrated M.Tech in Computer Science at VIT. I specialize in machine learning, web development, and AI-based solutions.`;

const prompts = [
  ["who is janani", "tell me about janani", "what is janani's background"],
  ["what are janani's achievements",'achievements', "janani's experience", "projects by janani"],
  ["what projects has janani worked on", 'projects',"explain janani's projects", "janani's projects"],
  ["how did janani build the student portal", "student portal project", "explain student portal"],
  ["stock price prediction", "how was stock prediction built", "explain stock prediction project"],
  ["what did janani do in the weather app", "weather app project", "explain weather app"],
  ["janani's passions", "what does janani love", "janani's interests"],
  ["what technologies does janani know", "janani's skills", "programming languages"],
  ["what is janani's hackathon experience", "isro hackathon", "hackathon projects"],
  ["janani's future goals", "janani's aspirations", "where does janani see herself"],
  ["challenges faced by janani", "problems solved by janani", "difficulties in projects"],
  ["janani's education", "educational background", "where does janani study"],
  ["what makes janani different", "janani's uniqueness", "janani's special skills"]
];

const replies = [
  ["Janani is an M.Tech Computer Science student at VIT, passionate about AI, machine learning, and solving real-world problems with technology."],
  ["Her achievements include:\n1. ISRO Hackathon: 96% accuracy with YOLOv8.\n2. Developed a student portal for over 500 students.\n3. Created a Stock Price Prediction system and Weather App."],
  ["Janani has worked on projects including:\n- Real-Time Stock Prediction.\n- A Student Portal Website.\n- Weather Forecasting App with API integration."],
  ["The Student Portal automates solutions for common student problems, reducing manual effort with user-friendly interfaces."],
  ["The Stock Price Prediction project uses Python, machine learning (LSTM models), and real-time market data integration."],
  ["Janani's Weather App uses REST APIs to display real-time weather data based on user input."],
  ["Janani is passionate about applying machine learning to practical applications and building innovative web solutions."],
  ["She is skilled in Python, JavaScript, TensorFlow, YOLOv8, and web development technologies."],
  ["In the ISRO Hackathon, Janani annotated 50,000 moon images with 96% accuracy, using YOLOv8 for image detection."],
  ["Janani's future goals include advancing AI research and working on impactful technology projects."],
  ["Some challenges Janani faced include optimizing API performance for live data in her stock prediction system."],
  ["She is pursuing an integrated M.Tech in Computer Science at VIT."],
  ["Her unique skill is blending machine learning expertise with real-world problem-solving."]
];

// Alternative response
const alternative = ["I'm here to help you learn about Janani's work and skills! Try asking about her projects, achievements, or experience."];

// Reply function
function getBotReply(input) {
  input = input.toLowerCase();
  for (let i = 0; i < prompts.length; i++) {
    if (prompts[i].some((prompt) => input.includes(prompt))) {
      return replies[i][Math.floor(Math.random() * replies[i].length)];
    }
  }
  return alternative[Math.floor(Math.random() * alternative.length)];
}

// Example for testing
console.log(getBotReply("tell me about janani"));
console.log(getBotReply("what are janani's achievements"));
console.log(getBotReply("how was the student portal created?"));
