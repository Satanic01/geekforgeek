
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition(); 
    recognition.continuous = false;  
    recognition.interimResults = false; 
    recognition.lang = 'en-US';  

    const startBtn = document.getElementById('start-btn');
    const responseText = document.getElementById('response-text');
    const output = document.getElementById('output');

    startBtn.addEventListener('click', () => {
        recognition.start();
        responseText.textContent = 'Listening...';
    });

    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        output.textContent = `You said: ${transcript}`;
        handleVoiceCommand(transcript);
    };4

   
    recognition.onerror = function(event) {
        responseText.textContent = 'Sorry, I did not understand that.';
    };

   
    function handleVoiceCommand(command) {
        const speechSynthesis = window.speechSynthesis;
        let response = '';

        if (command.includes('hello')) {
            response = 'Hello! How can I assist you today?';
        } else if (command.includes('time')) {
            const time = new Date().toLocaleTimeString();
            response = `The time is ${time}.`;
        } else if (command.includes('date')) {
            const date = new Date().toLocaleDateString();
            response = `Today is ${date}.`;
        } else if (command.includes('open Google')) {
            window.open('https://www.google.com', '_blank');
            response = 'Opening Google for you.';
        }else if (command.includes('open YouTube')) {
            window.open('https://www.youtube.com/', '_blank');
            response = 'Opening YouTube for you.';
        }else if (command.includes('tell me about thyroid')) {
            window.open('https://my.clevelandclinic.org/health/body/23188-thyroid', '_blank');
            response = 'The thyroid is a small, butterfly-shaped gland located at the front of your neck, just below your Adam’s apple. It makes hormones that control many important functions in your body, like how fast your heart beats, how your body uses energy, and how you stay warm.';
        }else if (command.includes('what is thyroid')) {
            window.open('https://my.clevelandclinic.org/health/body/23188-thyroid', '_blank');
            response = 'The thyroid is a small, butterfly-shaped gland located at the front of your neck, just below your Adam’s apple. It makes hormones that control many important functions in your body, like how fast your heart beats, how your body uses energy, and how you stay warm.';
        } else if (command.includes('what is cancer')) {
            window.open('https://my.clevelandclinic.org/health/diseases/12194-cancer', '_blank');
            response = 'Cancer is a disease that happens when cells in the body grow uncontrollably and don’t behave the way they’re supposed to. Normally, our cells grow, divide, and eventually die in a controlled way. But with cancer, something goes wrong with this process, causing cells to multiply too quickly or not die when they should.';
        } else if (command.includes('tell me about cancer')) {
            window.open('https://my.clevelandclinic.org/health/diseases/12194-cancer', '_blank');
            response = 'Cancer is a disease that happens when cells in the body grow uncontrollably and don’t behave the way they’re supposed to. Normally, our cells grow, divide, and eventually die in a controlled way. But with cancer, something goes wrong with this process, causing cells to multiply too quickly or not die when they should.';    
        }else if (command.includes('symptoms for fever')) {
            window.open('https://my.clevelandclinic.org/health/symptoms/10880-fever', '_blank');
            response = 'A fever is when your body temperature is higher than your normal average temp. Most providers say a fever is either 100.0 F (37.8 C) or 100.4 F (38 C). When you have a fever, it’s your body’s normal response to fighting an infection or illness. Fevers usually aren’t a serious concern. They typically go away when the infection passes';
        }else if (command.includes('what is fever')) {
            window.open('https://my.clevelandclinic.org/health/symptoms/10880-fever', '_blank');
            response = 'A fever is when your body temperature is higher than your normal average temp. Most providers say a fever is either 100.0 F (37.8 C) or 100.4 F (38 C). When you have a fever, it’s your body’s normal response to fighting an infection or illness. Fevers usually aren’t a serious concern. They typically go away when the infection passes';
        }else if (command.includes('medicine for fever')) {
            window.open('https://www.drugs.com/condition/fever.html', '_blank');
            response = 'SEE YR MEDICINE';
        }else if (command.includes('medicine for thyroid')) {
            window.open('https://www.drugs.com/drug-class/thyroid-drugs.html', '_blank');
            response = 'SEE YR MEDICINE'; 
        }else if (command.includes('medicine for cancer')) {
            window.open('https://www.cancer.gov/about-cancer/treatment/drugs', '_blank');
            response = 'SEE YR MEDICINE'; 
        }else if (command.includes('medicine for headache')) {
            window.open('https://www.drugs.com/condition/headache.html', '_blank');
            response = 'SEE YR MEDICINE';            
        } else if (command.includes('thank you')) {
            response = 'You are welcome!';
        } else {
            response = "I'm not sure how to respond to that.";
        }

       
        const utterance = new SpeechSynthesisUtterance(response);
        speechSynthesis.speak(utterance);
        responseText.textContent = response;
    }

} else {
    alert('Your browser does not support Web Speech API. Please try a modern browser like Chrome.');
}
