import { cwd } from 'process'
import { join } from 'path'
import { SYSTEM_PROMPT } from '../consts/llm'
import { app } from 'electron'
import { LlamaChatSession } from 'node-llama-cpp'

const MODEL = {
  SCHEDULE: 'Phi-3-mini-4k-instruct-q4.gguf'
}

const modelsDir = app.isPackaged ? join(process.resourcesPath, 'model') : join(cwd(), 'model')

export const getLlamaSession = async () => {
  const { getLlama, LlamaChatSession } = await import('node-llama-cpp')
  const llama = await getLlama({ build: 'auto' })
  const scheduleModelPath = join(modelsDir, MODEL.SCHEDULE)
  const [scheduleModel] = await Promise.all([llama.loadModel({ modelPath: scheduleModelPath })])

  const [reviewModelContext] = await Promise.all([scheduleModel.createContext()])
  const scheduleModelSession = new LlamaChatSession({
    contextSequence: reviewModelContext.getSequence(),
    systemPrompt: SYSTEM_PROMPT.SCHEUDULE
  })

  return { scheduleModelSession }
}
const inputPropmt = (user_input: string) => `
You are a date and event extractor. 

Given a natural language input describing a meeting, event, or schedule-related context, your task is to return a simplified JSON object with the following fields:

- title: a short, descriptive title of the event in English.
- content (optional): a brief additional note or context (if available).
- startDate: the exact start date and time in ISO 8601 format (e.g., 2025-07-05T13:00:00.000Z).
- endDate (optional): the exact end date and time in ISO 8601 format, if available or can be inferred.

Only respond with a valid JSON object. Do not include any explanations or markdown formatting. Use UTC if the timezone is not specified. Estimate end time only if confidently implied (e.g., "90-minute meeting"). If time is vague (e.g., "next week"), try your best to resolve it or omit the date fields.

Be strict. If no valid date or time is found, return 'null'.

Examples:

Input: "Let's meet on Friday, July 12th at 3pm to review the launch plan."  
→  
{
  "title": "Launch Plan Review Meeting",
  "startDate": "2025-07-12T15:00:00.000Z"
}

Input: "I'll be on vacation from August 1 to August 7."  
→  
{
  "title": "Vacation",
  "startDate": "2025-08-01T00:00:00.000Z",
  "endDate": "2025-08-07T23:59:59.000Z"
}

Ok, this is User Input.
"${user_input}"
`
export const getScheudleDataFromPrompt = async (chatSession: LlamaChatSession, prompt: string) => {
  console.log({ prompt })
  const result = await chatSession.prompt(inputPropmt(prompt))
  console.log(result)
}
