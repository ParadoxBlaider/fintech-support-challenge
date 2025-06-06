import type { Meta, StoryObj } from '@storybook/react';
import PricingTierCard from './PricingTierCard';

export default {
  title: 'Components/PricingTierCard',
  component: PricingTierCard
} as Meta<typeof PricingTierCard>;

export const Default: StoryObj<typeof PricingTierCard> = {
  args:{
    plan: {
      planName: 'Basic',
      price: 10,
      features: [
        'Limited content access',
        'Email support',
        '1 user account',
        'Chat limited'
      ],
      isFeatured: false,
      ctaText: 'Select basic'
    }
  }
};

export const Featured: StoryObj<typeof PricingTierCard> = {
  args:{
    plan: {
      planName: 'Premium',
      price: 50,
      features: [
        'Full access to all content',
        '24/7 phone, email and chat support',
        'Unlimited user accounts',
        'Full access to metrics data analyzer',
        'Advanced integrations'
      ],
      isFeatured: true,
      ctaText: 'Select Premium'
    }
  }
};

export const Standard: StoryObj<typeof PricingTierCard> = {
  args:{
    plan: {
      planName: 'Standard',
      price: 25,
      features: [
        'Full content access',
        'Priority email and chat support',
        'Up to 5 user accounts',
        'Access to limited metrics data analyzer',
        'Basic integrations'
      ],
      isFeatured: false,
      ctaText: 'Select standard'
    }
  }
};

export const Free: StoryObj<typeof PricingTierCard> = {
  args:{
    plan: {
      planName: 'Free',
      price: 0,
      features: [
        'Basic access',
        'Comunnity support'
      ],
      isFeatured: false,
      ctaText: 'Try for free'
    }
  }
};