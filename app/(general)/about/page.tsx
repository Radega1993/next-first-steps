import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About - Raül de Arriba',
    description: 'About page by Raül de Arriba',
    keywords: ['About Page', 'Raul']
}


export default  function AboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    )
}