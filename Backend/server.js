const express = require('express');
const app = express();
const { Configuration, OpenAIApi } = require('openai');
const api_key = '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';
const openai = new OpenAIApi(new Configuration({
    apiKey: api_key
}))
app.get('/ai', async (req, res) => {
    try {
        openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: "hello chatgpt" }]
        }).then(resp => {
            console.log(resp.data.choices)
            res.send(resp.data.choices)
        })

    } catch (error) {
        console.log(error.data.error.message)
    }
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
