let textBox = document.querySelector('#textBox');
let response = document.querySelector('#response');
let btn = document.querySelector('.askBtn')

let apiKey = `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`


btn.addEventListener('click', async () => {
    const message = textBox.value
    textBox.value = '';

    if(message.length === 0) {
        response.innerHTML = `<div class="empty">Input cannot be empty</div>`
    }else{
        response.innerHTML += `
        <div class="message respond">${message} <ion-icon name="people-outline" class="icon"></ion-icon></div>
    `

        const newResponse = await axios.post(
        'https://api.openai.com/v1/completions', {
            prompt: message,
            model: 'text-davinci-003',
            temperature: 0.8,
            max_tokens: 4000,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            top_p: 1
        },
        {
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${apiKey}`
            }
        }
        );
        const chatResponse = newResponse.data.choices[0].text;


        response.innerHTML += ` <div class="message respondTwo" ><ion-icon name="skull-outline" class="icon"></ion-icon> ${chatResponse}</div>`
    }
})
  


