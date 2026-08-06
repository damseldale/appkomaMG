export interface Subscription {
  id: string;
  userId: string;
  stripeSubscriptionId: string;
  status: 'active' | 'canceled' | 'past_due' | 'incomplete';
  plan: 'free' | 'pro' | 'enterprise';
  currentPeriodEnd: Date;
}
