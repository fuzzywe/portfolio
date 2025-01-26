document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const openChatbotButton = document.getElementById("open-chatbot");
    const closeChatbotButton = document.getElementById("close-chatbot");
    const chatbot = document.getElementById("chatbot");
    const messagesContainer = document.getElementById("messages");

    // Open chatbot (Mobile + Desktop)
    openChatbotButton.addEventListener("click", openChat);
    openChatbotButton.addEventListener("touchstart", openChat);

    function openChat() {
        chatbot.style.display = "block";
        openChatbotButton.style.display = "none";
    }

    // Close chatbot (Mobile + Desktop)
    closeChatbotButton.addEventListener("click", closeChat);
    closeChatbotButton.addEventListener("touchstart", closeChat);

    function closeChat() {
        chatbot.style.display = "none";
        openChatbotButton.style.display = "block";
    }

    // Send a message (Fixed for Mobile)
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Enter") {
            e.preventDefault();  // Prevents keyboard issues on mobile
            sendMessage();
        }
    });

    function sendMessage() {
        const userInput = inputField.value.trim();
        if (userInput) {
            displayMessage(userInput, "user");
            inputField.value = "";
            generateResponse(userInput);
        }
    }

    // Display a message in the chat
    function displayMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "user" ? "user-message" : "bot-message";
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
    }

    // Generate a bot response
    function generateResponse(userInput) {
        const botReply = getBotReply(userInput);
        displayMessage(botReply, "bot");
        textToSpeech(botReply); // Optional: Text-to-Speech
    }

    // Integrated Bot response logic
    function getBotReply(input) {
        input = input.toLowerCase().trim();
        for (let i = 0; i < prompts.length; i++) {
            for (let j = 0; j < prompts[i].length; j++) {
                if (input.includes(prompts[i][j])) {
                    const botReply = replies[i][Math.floor(Math.random() * replies[i].length)];
                    return botReply;
                }
            }
        }

        if (input.includes("covid") || input.includes("corona") || input.includes("virus")) {
            return coronavirus[Math.floor(Math.random() * coronavirus.length)];
        }

        return alternative[Math.floor(Math.random() * alternative.length)];
    }
});
