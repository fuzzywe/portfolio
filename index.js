document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const sendButton = document.getElementById("send-button"); // ✅ Get Send Button
    const messagesContainer = document.getElementById("messages");

    // Handle "Enter" key press
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Enter") {
            e.preventDefault(); // Prevents mobile keyboard issues
            sendMessage();
        }
    });

    // Handle Send Button Click (Fix for Mobile)
    sendButton.addEventListener("click", sendMessage);
    sendButton.addEventListener("touchstart", sendMessage); // ✅ Fix for Mobile

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
    }

    function getBotReply(input) {
        input = input.toLowerCase().trim();
        return "Hello! I'm a chatbot."; // Replace with actual chatbot logic
    }
});
