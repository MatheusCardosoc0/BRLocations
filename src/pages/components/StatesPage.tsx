import React from 'react'
import { NameStates } from '../../constants/NameStates'
import { useDataContext } from '../../context/UseDataContext'
import { getBannerUrl } from '../../utils/GetBanner'

const StatesPage = () => {

  const { states, isFilterActivate, municipios, selectedMunicipios } = useDataContext()

  


  return (
    <main className='section grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-20'>

      {states.map(state => (
          <button className=' bg-gray-700/40 shadow-[4px_4px_10px_black] my-3  rounded-b-xl text-gray-200 font-bold uppercase'
            onClick={() => selectedMunicipios(state.sigla)}>
  
            <div className='w-[200px] h-[200px] shadow-[0px_30px_100px_black]'>
              {getBannerUrl(state.nome)}
            </div>
            {state.nome}
          </button>
        
      ))}

    </main>
  )
}

export default StatesPage