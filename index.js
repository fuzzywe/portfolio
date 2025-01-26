document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const sendButton = document.getElementById("send-button"); // Ensure the button has this ID
    const openChatbotButton = document.getElementById("open-chatbot");
    const closeChatbotButton = document.getElementById("close-chatbot");
    const chatbot = document.getElementById("chatbot");
    const messagesContainer = document.getElementById("messages");

    // Open chatbot
    openChatbotButton.addEventListener("click", openChat);
    openChatbotButton.addEventListener("touchstart", openChat);

    function openChat() {
        chatbot.style.display = "block";
        openChatbotButton.style.display = "none";
    }

    // Close chatbot
    closeChatbotButton.addEventListener("click", closeChat);
    closeChatbotButton.addEventListener("touchstart", closeChat);

    function closeChat() {
        chatbot.style.display = "none";
        openChatbotButton.style.display = "block";
    }

    // Handle Enter Key Press
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Enter") {
            e.preventDefault(); // Fixes keyboard issues
            sendMessage();
        }
    });

    // Handle Send Button Click (Fix for Mobile)
    sendButton.addEventListener("click", sendMessage);
    sendButton.addEventListener("touchstart", sendMessage);

    function sendMessage() {
        const userInput = inputField.value.trim();
        if (userInput) {
            displayMessage(userInput, "user");
            inputField.value = "";
            generateResponse(userInput);
        }
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "user" ? "user-message" : "bot-message";
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
    }

    function generateResponse(userInput) {
        const botReply = getBotReply(userInput);
        displayMessage(botReply, "bot");
        textToSpeech(botReply); // Optional: Text-to-Speech
    }

    function getBotReply(input) {
        input = input.toLowerCase().trim();
        for (let i = 0; i < prompts.length; i++) {
            for (let j = 0; j < prompts[i].length; j++) {
                if (input.includes(prompts[i][j])) {
                    return replies[i][Math.floor(Math.random() * replies[i].length)];
                }
            }
        }
        return alternative[Math.floor(Math.random() * alternative.length)];
    }
});
