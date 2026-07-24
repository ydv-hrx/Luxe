export interface ConciergeMessage {
  id: string;
  sender: 'user' | 'concierge' | 'system';
  text: string;
  timestamp: string;
  attachments?: string[];
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
  messages: ConciergeMessage[];
}

export interface IConciergeService {
  sendMessage(text: string, threadId?: string): Promise<ConciergeMessage>;
  getThreadMessages(threadId: string): Promise<ConciergeMessage[]>;
  createTicket(subject: string, category: string, initialMessage: string): Promise<SupportTicket>;
  getTickets(): Promise<SupportTicket[]>;
  submitFeedback(ticketId: string, rating: number, comment?: string): Promise<boolean>;
}

class MockConciergeService implements IConciergeService {
  private messages: ConciergeMessage[] = [
    {
      id: 'msg-1',
      sender: 'concierge',
      text: 'Good afternoon. I am Elena, your LUXE Senior Private Concierge. How may I assist your wardrobe selection today?',
      timestamp: '14:30',
    },
  ];

  private tickets: SupportTicket[] = [
    {
      id: 'TCK-8821',
      subject: 'Custom Sizing Query — Cashmere Hoodie',
      category: 'Styling & Fit',
      status: 'In Progress',
      createdAt: '2026-07-24',
      messages: [],
    },
  ];

  async sendMessage(text: string): Promise<ConciergeMessage> {
    const userMsg: ConciergeMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    this.messages.push(userMsg);

    // Simulated AI / Human Concierge automated reply
    const replyText = text.toLowerCase().includes('cashmere')
      ? 'Our Grade-A Mongolian cashmere is harvested ethically and double-spun. Would you like me to send sizing measurements for your chest width?'
      : 'Thank you. I am coordinating with our Milan atelier right now to verify availability.';

    const replyMsg: ConciergeMessage = {
      id: `msg-${Date.now() + 1}`,
      sender: 'concierge',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    this.messages.push(replyMsg);

    return Promise.resolve(replyMsg);
  }

  async getThreadMessages(): Promise<ConciergeMessage[]> {
    return Promise.resolve([...this.messages]);
  }

  async createTicket(subject: string, category: string, initialMessage: string): Promise<SupportTicket> {
    const ticket: SupportTicket = {
      id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      subject,
      category,
      status: 'Open',
      createdAt: new Date().toISOString().split('T')[0],
      messages: [
        {
          id: `msg-t-${Date.now()}`,
          sender: 'user',
          text: initialMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ],
    };
    this.tickets.push(ticket);
    return Promise.resolve(ticket);
  }

  async getTickets(): Promise<SupportTicket[]> {
    return Promise.resolve([...this.tickets]);
  }

  async submitFeedback(): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const conciergeService: IConciergeService = new MockConciergeService();
