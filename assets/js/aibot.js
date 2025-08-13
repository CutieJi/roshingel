        function toggleChat() {
            const chatOverlay = document.getElementById('chatOverlay');
            const chatBody = document.getElementById('chatBody');
            chatOverlay.classList.toggle('open');
            if (chatOverlay.classList.contains('open')) {
                // Reset chat body to initial message when opening
                chatBody.innerHTML = '<div class="chat-message ai">Hi, I\'m Rosh\'s AIBot, what do you want to know about me?</div>';
                document.getElementById('chatInput').focus();
            }
        }

        async function sendMessage() {
            const input = document.getElementById('chatInput');
            const chatBody = document.getElementById('chatBody');
            const message = input.value.trim();

            if (message) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'chat-message user';
                userMessage.textContent = message;
                chatBody.appendChild(userMessage);

                // Prepare API request body
                const myDescription = "I'm a web developer with a passion for building user-friendly and visually appealing applications. With [X years] of experience, I specialize in JavaScript, React, UI/UX design. My goal is to create impactful digital experiences.";
                const requestBody = {
                    contents: [{
                        parts: [{
                            text: `User_message:${message}. Reply naturally to the usermessage and if required then answer based on: ${myDescription} or just simply give friendly reply .and reply in a way that Rosh's AIBot is himself talking .reply in short sentences`
                        }]
                    }]
                };

                // Mock API response (replace with actual fetch call)
                const mockResponse = {
                    candidates: [{
                        content: {
                            parts: [{
                                text: `Hey, thanks for asking! I'm Rosh's AIBot. Your question: "${message}". I love working on web apps. Want to know more about my skills?`
                            }]
                        }
                    }]
                };

                // Uncomment and replace with actual API call when you have the API key
                
                const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBHZsonND8cCjDdik-T7U8ImOSgYAncOIU', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
                const data = await response.json();
                const aiResponse = data.candidates[0].content.parts[0].text;
                

                // // Use mock response for now
                // const aiResponse = mockResponse.candidates[0].content.parts[0].text;

                // Add AI response
                setTimeout(() => {
                    const aiMessage = document.createElement('div');
                    aiMessage.className = 'chat-message ai';
                    aiMessage.textContent = aiResponse;
                    chatBody.appendChild(aiMessage);
                    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
                }, 500);

                input.value = '';
                chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
            }
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });