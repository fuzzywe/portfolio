document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const openChatbotButton = document.getElementById("open-chatbot"); // Add this to your HTML if needed
    const closeChatbotButton = document.getElementById("close-chatbot"); // Add this to your HTML if needed
    const chatbot = document.getElementById("chatbot");
    const messagesContainer = document.getElementById("messages");

    // Optional: Open chatbot (ensure these buttons exist in your HTML)
    if (openChatbotButton && closeChatbotButton) {
        openChatbotButton.addEventListener("click", () => {
            chatbot.style.display = "block";
            openChatbotButton.style.display = "none";
        });

        closeChatbotButton.addEventListener("click", () => {
            chatbot.style.display = "none";
            openChatbotButton.style.display = "block";
        });
    }

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
        const botReply = getBotReply(userInput);
        displayMessage(botReply, "bot");
        textToSpeech(botReply); // Optional text-to-speech feature
    }

    // Bot response logic using prompts and replies
    function getBotReply(input) {
        input = input.toLowerCase();
        for (let i = 0; i < prompts.length; i++) {
            if (prompts[i].some(prompt => input.includes(prompt))) {
                const repliesArray = replies[i];
                return repliesArray[Math.floor(Math.random() * repliesArray.length)];
            }
        }
        return alternative[Math.floor(Math.random() * alternative.length)];
    }
});
