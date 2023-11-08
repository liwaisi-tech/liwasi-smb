import React from 'react'
import RoundedBgButton from '../RoundedBgButton'

function EmptyBusinessList() {
    return (
        <div className="w-full">
            <p
                className="text-black font-light text-sm"
            >No se encontraron pymes. ¿Deseas crear una pyme?</p>
            <div className="w-full intems-center flex justify-end">
                <RoundedBgButton
                    text="Crear pyme"
                />
            </div>
        </div>
    )
}

export default EmptyBusinessList