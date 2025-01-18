document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const openChatbotButton = document.getElementById("open-chatbot");
    const closeChatbotButton = document.getElementById("close-chatbot");
    const chatbot = document.getElementById("chatbot");
    const messagesContainer = document.getElementById("messages");
    const sendButton = document.getElementById("send-button");

    // Open chatbot
    const toggleChatbot = (show) => {
        chatbot.style.display = show ? "block" : "none";
        openChatbotButton.style.display = show ? "none" : "block";
    };
    openChatbotButton.addEventListener("click", () => toggleChatbot(true));
    closeChatbotButton.addEventListener("click", () => toggleChatbot(false));

    // Send a message
    const handleSend = () => {
        const userInput = inputField.value.trim();
        if (userInput) {
            displayMessage(userInput, "user");
            inputField.value = "";
            generateResponse(userInput);
        }
    };

    sendButton.addEventListener("click", handleSend);
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Enter") {
            e.preventDefault();
            handleSend();
        }
    });

    function displayMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "user" ? "user-message" : "bot-message";
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function generateResponse(userInput) {
        const botReply = getBotReply(userInput);
        displayMessage(botReply, "bot");
    }

    function getBotReply(input) {
        input = input.toLowerCase().trim();
        for (let i = 0; i < prompts.length; i++) {
            if (prompts[i].includes(input)) {
                return replies[i][Math.floor(Math.random() * replies[i].length)];
            }
        }
        if (input.includes("covid") || input.includes("corona") || input.includes("virus")) {
            return coronavirus[Math.floor(Math.random() * coronavirus.length)];
        }
        return alternative[Math.floor(Math.random() * alternative.length)];
    }
});
