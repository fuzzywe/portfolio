document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const messagesContainer = document.getElementById("messages");

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
        input = input.toLowerCase();
        for (let i = 0; i < prompts.length; i++) {
            if (prompts[i].includes(input)) {
                const repliesArray = replies[i];
                return repliesArray[Math.floor(Math.random() * repliesArray.length)];
            }
        }
        return alternative[Math.floor(Math.random() * alternative.length)];
    }
});
