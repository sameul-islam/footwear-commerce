import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import { IoChatboxEllipses, IoSendOutline } from "react-icons/io5";
import logo from '../../assets/image/logo.webp'
import { RiCloseLargeLine } from "react-icons/ri";
import { suggestedQuestions } from "./suggestedQuestions";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: "ai", text: "Hi! I'm your AI assistant. How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState(suggestedQuestions.slice(0, 4));

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), type: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response (future: integrate API here)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, type: "ai", text: "This is a placeholder AI reply." },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSuggestionClick = (id) => {
    const selected = suggestedQuestions.find(q => q.id === id);
    if (!selected) return;

    setMessages(prev => [...prev, { id: Date.now(), type: "user", text: selected.question }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, type: "ai", text: selected.answer }])
      setIsTyping(false);
  
    const nextSuggestions = suggestedQuestions.filter(q => selected.next.includes(q.id));
    if (nextSuggestions.length) setCurrentSuggestions(nextSuggestions);
    }, 1200);
  };

  return (
    <>
      {/* Chat Icon */}
      <motion.div
        className="fixed bottom-14 md:bottom-6 right-6 z-50"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="w-11 h-9.5 md:w-13 md:h-11 bg-green-800 hover:bg-green-900 rounded-md flex items-center justify-center shadow-xl cursor-pointer transition">
          <IoChatboxEllipses className="text-white w-6 h-6" />
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-3 sm:right-6 z-50  w-86 md:w-100 h-130 md:h-150 bg-white rounded-xl shadow-2xl shadow-black flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-green-600 text-white px-4 py-3 font-semibold flex justify-between items-center">
              <img src={logo} alt="logo" className="h-10" />
              <button onClick={() => setIsOpen(false)} className="text-white font-bold text-2xl hover:text-gray-300 transition cursor-pointer"> <RiCloseLargeLine/> </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 no-scrollbar overflow-y-auto space-y-2">
              {messages.map(msg => (
                <ChatMessage key={msg.id} message={msg} />
              ))}


              {isTyping && (
                <div className="flex justify-start">
                  <TypingIndicator/>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            <div className="p-2 flex flex-wrap gap-2 border-t border-gray-200 bg-gray-50">
              {currentSuggestions.map(sq => (
                <button key={sq.id} onClick={() => handleSuggestionClick(sq.id)} className="bg-[#579569] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#148b36] transition">
                   {sq.question}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 flex gap-1">
              <input
                type="text"
                className="flex-1 border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-800 font-Poppins text-sm"
                placeholder="Type a message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
              />
              <button
                className="text-green-900"
                onClick={handleSend}
              >
                <IoSendOutline size={28}/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
