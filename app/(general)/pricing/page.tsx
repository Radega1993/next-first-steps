import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing - Raül de Arriba',
    description: 'Pricing page by Raül de Arriba',
    keywords: ['Pricing Page', 'Raul']
}

export default  function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}