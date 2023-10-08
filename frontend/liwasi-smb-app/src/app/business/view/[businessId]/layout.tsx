import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Ver | Mis pymes',
    description: 'Ver la información de tu pyme',
}

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}

export default layout