import { Metadata } from 'next'
import { Provider } from "@/components/ui/provider"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'EcofundX',
    description: 'A platform for eco-friendly projects',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning={true}>
            <body>
                <Provider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </Provider>
            </body>
        </html>
    )
}
