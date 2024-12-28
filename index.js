document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const openChatbotButton = document.getElementById("open-chatbot");
    const closeChatbotButton = document.getElementById("close-chatbot");
    const chatbot = document.getElementById("chatbot");
    const messagesContainer = document.getElementById("messages");

    // Open chatbot
    openChatbotButton.addEventListener("click", () => {
        chatbot.style.display = "block";
        openChatbotButton.style.display = "none";
    });

    // Close chatbot
    closeChatbotButton.addEventListener("click", () => {
        chatbot.style.display = "none";
        openChatbotButton.style.display = "block";
    });

    // Send a message
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Enter") {
            const userInput = inputField.value.trim();
            if (userInput) {
                displayMessage(userInput, "user");
                inputField.value = "";
                generateResponse(userInput);
            }
        }
    });

    // Display a message in the chat
    function displayMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "user" ? "user-message" : "bot-message";
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    }

    // Generate a bot response
    function generateResponse(userInput) {
        const botReply = getBotReply(userInput); // Replace this with your logic
        displayMessage(botReply, "bot");
        textToSpeech(botReply); // Use text-to-speech for the bot reply
    }

    // Bot response logic
    function getBotReply(input) {
        input = input.toLowerCase();
        if (input.includes("hello")) {
            return "Hi there! How can I assist you today?";
        } else if (input.includes("help")) {
            return "Sure, let me know what you need help with.";
        } else {
            return "I'm sorry, I didn't understand that. Can you please rephrase?";
        }
    }
});
