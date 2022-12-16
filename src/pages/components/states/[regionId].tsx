import { useRouter } from 'next/router'
import React from 'react'
import { useDataContext } from '../../../context/UseDataContext'
import { getBannerUrl } from '../../../utils/GetBanner'

const Região = () => {

  const router = useRouter()

  const regionId = router.query.regionId

  const {states, selectedMunicipios} = useDataContext()

  return (
    <div>
      <main className='section grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-20'>

        {states.map(state => {if(state.regiao.nome === regionId) return (
          <button className=' bg-gray-700/40 shadow-[4px_4px_10px_black] my-3  rounded-b-xl text-gray-200 font-bold uppercase'
            onClick={() => selectedMunicipios(state.sigla)}>

            <div className='w-[200px] h-[200px] shadow-[0px_30px_100px_black]'>
              {getBannerUrl(state.nome)}
            </div>
            {state.nome}
          </button>

        )})}

      </main>
    </div>
  )
}

export default Região