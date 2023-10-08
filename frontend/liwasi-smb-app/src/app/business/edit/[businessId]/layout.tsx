import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Editar| Mis pymes',
    description: 'Editar la información de tu pyme',
}
function layout({children}:{children: React.ReactNode}) {
  return (
    <>
        {children}
    </>
  )
}

export default layout