import type { PricingTierCardProps } from "../interface/PricingCard"
import { FaCheckCircle, FaStar } from "react-icons/fa";

const PricingTierCard = ({ plan }:PricingTierCardProps) => {
  const getFeatureStyleCard = (isFeatured: boolean, type:string = 'card') => {
    if (type === 'card') {
      return isFeatured && 'shadow-lg shadow-viio-primary min-h-96';
    }
    if (type === 'cta') {
      /* return isFeatured ? 'bg-viio-primary text-viio-background' : 'text-viio-principal-text bg-viio-background'; */
      return 'bg-viio-primary text-viio-background';
    }
  };
  return (
    <article
      className={`cursor-pointer hover:scale-110 transition-transform min-w-64 max-w-64 bg-viio-background rounded-md py-6 px-4 text-viio-principal-text grid gap-4 text-center min-h-80 items-center content-between relative ${getFeatureStyleCard(plan.isFeatured)}`}
      role="region"
      saria-aria-labelledby={`plan-title-${plan.planName.toLocaleLowerCase()}`}
    >
      <div className="grid gap-2 content-start">
        {
          plan.isFeatured && (
            <div className="rounded-full w-10 h-10 bg-viio-background border border-viio-secondary absolute -top-4 right-0 left-[50%] -translate-x-[50%] flex items-center justify-center">
              <FaStar className="text-viio-primary pb-0.5" size={30} />
            </div>
          )
        }
        <h2 className="text-lg font-medium">{plan.planName}</h2>
        <p className="text-xl font-semibold">${plan.price}/month</p>
        <ul className="grid gap-1 text-left font-normal text-sm">
          {
            plan.features.map((feature, index) => (
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-viio-primary min-w-3.5" /><span>{feature}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <button className={`cursor-pointer rounded-md border border-viio-secondary h-10 ${getFeatureStyleCard(plan.isFeatured, 'cta')}`}>{plan.ctaText}</button>
    </article>
  )
}

export default PricingTierCard
