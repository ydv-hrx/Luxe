'use client';

import React, { useState, useEffect, useRef } from 'react';
import { conciergeService, ConciergeMessage } from '@/lib/services/concierge';
import { Button } from '@/components/ui/Button';
import { X, Send, Sparkles, Headset } from 'lucide-react';

export const ConciergeWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ConciergeMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    conciergeService.getThreadMessages('default').then(setMessages);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setIsLoading(true);

    const userMsg: ConciergeMessage = {
      id: `temp-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);

    const reply = await conciergeService.sendMessage(userText);
    setMessages((prev) => [...prev.filter((m) => m.id !== userMsg.id), userMsg, reply]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Widget Toggle Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-black text-white shadow-2xl hover:bg-neutral-800 transition-all duration-300 active:scale-95 flex items-center gap-2 border border-neutral-700"
        aria-label="Open LUXE Concierge Chat"
        aria-expanded={isOpen}
      >
        <Sparkles className="w-5 h-5 text-blue-400" />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Concierge</span>
      </button>

      {/* Chat Modal Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-screen max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom duration-200">
          {/* Header */}
          <div className="p-4 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-serif font-bold text-white">
                <Headset className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5">
                  LUXE Private Concierge
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h3>
                <span className="text-[11px] text-neutral-400">Online • Senior Stylist Elena</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full"
              aria-label="Close concierge chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-neutral-50/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-black text-white rounded-br-xs'
                      : 'bg-white text-neutral-900 border border-neutral-200/80 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`text-[9px] mt-1 block text-right ${
                      msg.sender === 'user' ? 'text-neutral-400' : 'text-neutral-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-neutral-400 text-xs py-2">
                <Sparkles className="w-4 h-4 animate-spin text-blue-500" />
                <span>Concierge is typing...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-neutral-200 bg-white flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about sizing, materials, styling..."
              className="flex-1 bg-neutral-100 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-black"
            />
            <Button variant="primary" size="sm" type="submit" disabled={!input.trim()}>
              <Send className="w-3.5 h-3.5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
