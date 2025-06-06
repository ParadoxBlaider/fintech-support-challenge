import { useState } from "react";
import PricingTierCard from "./components/PricingTierCard";
import { type Plan } from './interface/index';

function App() {
  const [plans, setPlans] = useState<Plan[]>([
    {
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
    },
    {
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
    },
    {
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
    },
  ]);
  return (
    <>
      <div>
        <h1>VIIO plans</h1>
        {
          plans.map((plan, index) => (
            <PricingTierCard plan={plan}/>
          ))
        }
      </div>
    </>
  )
}

export default App
