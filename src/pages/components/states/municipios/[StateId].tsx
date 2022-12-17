import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { OptionFilter } from '../../../../constants/OptionsFilter'
import { useDataContext } from '../../../../context/UseDataContext'

const State = () => {

  const [isFilterActivate, setIsFilterActivate] = useState(false)
  const [keyword, setKeyword] = useState('municipios')

  const router = useRouter()

  const StateId = router.query.StateId

  const { municipios, setMunicipios } = useDataContext()

  async function getMunicipios(key = 'municipios') {
    
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${StateId}/${key}`)

      const json = await response.json()

      setMunicipios(json)
      setKeyword(key)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMunicipios()
  }, [])


  return (
    <section className='flex flex-col gap-20 text-center section px-4'>

      <div className='flex justify-center'>
        <h2 className='text-4xl font-serif'>{keyword[0].toUpperCase() + keyword.substring(1)}</h2>

        <div className='absolute left-0 flex flex-col gap-3'>

          <button className={`p-1 cursor-pointer bg-green-900 rounded-lg text-gray-100 w-[100px] ${isFilterActivate && 'brightness-200'}`}
            onClick={() => setIsFilterActivate(prev => !prev)}>
            <b className='drop-shadow-[1px_1px_1px_black]'>
              Opções
            </b>
          </button>

          {isFilterActivate &&
            OptionFilter.map(option => (
              <button className='p-1 cursor-pointer bg-green-900 rounded-lg text-gray-100'
                onClick={() => getMunicipios(option.option)}>
                <b className='drop-shadow-[1px_1px_1px_black]'>
                  {option.option}
                </b>
              </button>
            ))}

        </div>

      </div>

      <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-3'>
        {municipios.map(municipio => (
          <div className='bg-gray-700 shadow-[4px_4px_10px_black] my-3  rounded-lg text-gray-200 items-center flex justify-center p-1 font-bold uppercase text-center'>
            <h3>
              {municipio.nome}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default State