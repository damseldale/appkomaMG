import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock_key', {
      apiVersion: '2023-10-16',
    });
  }

  async createCheckoutSession(userId: string, email: string, priceId: string) {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.CLIENT_URL || 'http://localhost:3000'}/dashboard?success=true`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:3000'}/dashboard?canceled=true`,
      metadata: { userId },
    });
    return session;
  }

  async constructEventFromPayload(sig: string, payload: Buffer) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_mock_secret';
    return this.stripe.webhooks.constructEvent(payload, sig, webhookSecret);
  }
}
