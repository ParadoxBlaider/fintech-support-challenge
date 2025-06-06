import type { PricingTierCardProps } from "../interface/PricingCard"

const PricingTierCard = ({ plan }:PricingTierCardProps) => {
  return (
    <div>
      <h2>{plan.planName}</h2>
      <p>${plan.price}/month</p>
      <ul>
        {
          plan.features.map((feature, index) => (
            <li>{feature}</li>
          ))
        }
      </ul>
      <button>{plan.ctaText}</button>
    </div>
  )
}

export default PricingTierCard
