// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";
const fs = require('fs');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": "You generate cover letters for job applications." }].concat(req.body.messages),
  });
  if (req.method === 'POST'){
    fs.writeFileSync('./example.json', JSON.stringify(res.body))
    res.status(200).json({ result: completion.data.choices[0].message })
  }
  console.log(completion.data.choices[0].message);
  
}