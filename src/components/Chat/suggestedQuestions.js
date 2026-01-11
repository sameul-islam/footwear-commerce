import { conversationFlows } from "./conversationFlows";
import { conversationFlowsPart2 } from "./conversationFlows";
import { conversationFlowsPart3 } from "./conversationFlows";

const allFlows = [...conversationFlows, ...conversationFlowsPart2, ...conversationFlowsPart3];

export const suggestedQuestions = allFlows.map(flow => ({
  id: flow.id,
  question: flow.question,
  answer: flow.answer,
  next: flow.next || []
}));