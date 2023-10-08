import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Crear nueva Pyme | Mis pymes',
    description: 'Crae una nueva pyme',
}
function layout({children}:{children: React.ReactNode}) {
  return (
    <>
        {children}
    </>
  )
}

export default layout