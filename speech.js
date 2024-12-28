const synth = window.speechSynthesis;

const textToSpeech = (string) => {
    if (synth.speaking) {
        console.error("Speech synthesis is already speaking.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(string);
    utterance.text = string;
    utterance.lang = "en-US";
    utterance.volume = 1; // Volume range is 0 to 1
    utterance.rate = 1;   // Speech rate, normal is 1
    utterance.pitch = 1;  // Pitch range is 0 to 2

    utterance.onerror = (e) => console.error("Speech synthesis error:", e);

    synth.speak(utterance);
};
