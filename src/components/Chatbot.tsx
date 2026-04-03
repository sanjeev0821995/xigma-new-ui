"use client";

import { useMemo, useState } from "react";
import { chatbotFaq } from "@/src/lib/siteData";

type Message = {
  role: "user" | "bot";
  content: string;
};

const defaultMessage: Message = {
  role: "bot",
  content:
    "Hi! I am Xigmaweb AI assistant. Ask me about services, hiring models, QA testing, or contact details.",
};

function getBotReply(input: string): string {
  const clean = input.trim().toLowerCase();
  if (!clean) {
    return "Share a question and I will help right away.";
  }

  for (const item of chatbotFaq) {
    const key = item.question.toLowerCase();
    if (clean.includes("service") && key.includes("service")) return item.answer;
    if (clean.includes("hire") && key.includes("contract-to-hire")) return item.answer;
    if (clean.includes("developer") && key.includes("contract-to-hire")) return item.answer;
    if (clean.includes("test") && key.includes("testing")) return item.answer;
    if (clean.includes("tool") && key.includes("testing")) return item.answer;
    if (clean.includes("quote") && key.includes("quote")) return item.answer;
    if (clean.includes("contact") && key.includes("contact")) return item.answer;
  }

  const matched = chatbotFaq.find((item) =>
    clean.includes(item.question.toLowerCase().split(" ").slice(-1)[0]),
  );
  if (matched) return matched.answer;

  return "I can help with services, staffing, QA testing, quotes, and contact information. Could you share your exact requirement?";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([defaultMessage]);

  const quickQuestions = useMemo(
    () => [
      "What services do you provide?",
      "Do you provide contract-to-hire developers?",
      "How can I get a quote?",
    ],
    [],
  );

  const askQuestion = (question: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: question },
      { role: "bot", content: getBotReply(question) },
    ]);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    askQuestion(question);
    setInput("");
  };

  return (
    <section className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <button
        aria-label={open ? "Close AI chatbot" : "Open AI chatbot"}
        onClick={() => setOpen((prev) => !prev)}
        className="primary-btn pulse-dot rounded-full px-4 py-3 text-sm sm:text-base"
      >
        {open ? "Close Assistant" : "AI Assistant"}
      </button>

      {open && (
        <div className="glass mt-3 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border p-4 shadow-2xl">
          <div className="mb-3">
            <h2 className="heading text-lg font-semibold text-white">
              Xigmaweb AI Chat
            </h2>
            <p className="text-xs text-blue-100/85">
              Instant answers for services, hiring, and contact details.
            </p>
          </div>

          <div className="mb-3 max-h-64 space-y-2 overflow-y-auto pr-1">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-xl px-3 py-2 text-sm ${
                  message.role === "bot"
                    ? "bg-white/10 text-blue-50"
                    : "bg-blue-500/35 text-white"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {quickQuestions.map((question) => (
              <button
                key={question}
                onClick={() => askQuestion(question)}
                className="rounded-lg border border-white/20 bg-white/5 px-2 py-1 text-left text-xs text-blue-100 transition hover:bg-white/10"
              >
                {question}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2">
            <label htmlFor="chat-message" className="sr-only">
              Ask chatbot
            </label>
            <input
              id="chat-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-sm text-white placeholder:text-blue-200/65 focus:outline-none focus:ring-2 focus:ring-blue-400/70"
              placeholder="Ask a question..."
            />
            <button type="submit" className="primary-btn px-3 py-2 text-sm">
              Send
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
