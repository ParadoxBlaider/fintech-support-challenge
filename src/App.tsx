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

  const reorderedPlans = (() => {
    const featured = plans.find(plan => plan.isFeatured);
    const others = plans.filter(plan => !plan.isFeatured);
    if (featured) {
      return [others[0], featured, ...others.slice(1)];
    }
    return plans;
  })();

  return (
    <main className="p-2 bg-viio-background-alternative font-sans min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-xl font-semibold">¡Fintech plans!</h1>
      <section
        className="max-lg:grid min-lg:flex items-center justify-center gap-4"
        aria-label="Available pricing plans"
      >
        {
          reorderedPlans.map((plan, index) => (
            <PricingTierCard plan={plan}/>
          ))
        }
      </section>
    </main>
  )
}

export default App
