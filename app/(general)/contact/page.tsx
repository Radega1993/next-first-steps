import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact - Raül de Arriba',
    description: 'Contact page by Raül de Arriba',
    keywords: ['Contact Page', 'Raul']
}

export default  function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}