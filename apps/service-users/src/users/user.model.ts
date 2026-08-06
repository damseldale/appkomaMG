export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatarUrl?: string;
  subscriptionPlan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
  updatedAt: Date;
}
