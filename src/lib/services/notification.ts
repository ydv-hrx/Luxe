export interface UserNotification {
  id: string;
  title: string;
  message: string;
  category: 'Order' | 'Security' | 'Loyalty' | 'Capsule';
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

export interface INotificationService {
  getNotifications(): Promise<UserNotification[]>;
  markAsRead(id: string): Promise<boolean>;
  clearAll(): Promise<boolean>;
}

class MockNotificationService implements INotificationService {
  private notifications: UserNotification[] = [
    {
      id: 'notif-1',
      title: 'Order LX-9402 In Transit',
      message: 'Your White-Glove Air Courier is scheduled for delivery tomorrow by 4:00 PM.',
      category: 'Order',
      timestamp: '2 hours ago',
      isRead: false,
      actionUrl: '/track/LX-9402',
    },
    {
      id: 'notif-2',
      title: 'Security Notice: New Sign-in',
      message: 'New login detected from Safari on macOS (New York, USA).',
      category: 'Security',
      timestamp: '1 day ago',
      isRead: true,
    },
    {
      id: 'notif-3',
      title: 'Diamond Tier Status Renewed',
      message: 'You have earned 14,800 Diamond points for the 2026 Season.',
      category: 'Loyalty',
      timestamp: '3 days ago',
      actionUrl: '/rewards',
      isRead: true,
    },
  ];

  async getNotifications(): Promise<UserNotification[]> {
    return Promise.resolve([...this.notifications]);
  }

  async markAsRead(id: string): Promise<boolean> {
    const found = this.notifications.find((n) => n.id === id);
    if (found) found.isRead = true;
    return Promise.resolve(true);
  }

  async clearAll(): Promise<boolean> {
    this.notifications = [];
    return Promise.resolve(true);
  }
}

export const notificationService: INotificationService = new MockNotificationService();
