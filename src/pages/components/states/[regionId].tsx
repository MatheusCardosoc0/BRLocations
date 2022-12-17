import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDataContext } from '../../../context/UseDataContext'
import CardState from '../../../utils/CardState'
import { addBannerUrl } from '../../../utils/GetBanner'

const Região = () => {

  const router = useRouter()

  const regionId = router.query.regionId

  const { states, selectedMunicipios } = useDataContext()

  return (
    <div>
      <main className='section grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-20'>

        {states.map(state => {
          if (state.regiao.nome === regionId) return (
            <CardState selectedMunicipios={selectedMunicipios}
            state={state} />

          )
        })}

      </main>
    </div>
  )
}

export default Região