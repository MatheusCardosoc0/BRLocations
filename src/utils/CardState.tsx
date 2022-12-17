import Link from 'next/link'
import React from 'react'
import { StateProps } from '../interfaces'
import { addBannerUrl } from './GetBanner'

interface CardStateProps {
  state: StateProps
  selectedMunicipios: (sigla: string) => {}
  
}

const CardState = ({ selectedMunicipios, state }: CardStateProps) => {
  return (
    <Link className='bg-gray-700/40 shadow-[4px_4px_10px_black] my-3  rounded-b-xl text-gray-200 font-bold uppercase text-center'
    href={`/components/states/municipios/${state.sigla}`}
      onClick={() => selectedMunicipios(state.sigla)} >

       
        <div className='w-full h-[200px] shadow-[0px_30px_100px_black]'>
          {addBannerUrl(state.nome)}
        </div>
      

      {state.nome}
    </Link>
  )
}

export default CardState