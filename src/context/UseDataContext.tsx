import axios from "axios"
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { MunicipioProps, StateProps } from "../interfaces"
import { InitialValue } from "./InitialValue"

type InitialValueProps = {
  states: StateProps[]
  setStates: any
  municipios: MunicipioProps[]
  setMunicipios: any
  stateSelected: string
  setStateSelected: any
  isFilterActivate: boolean
  setIsFilterActivate: any
  selectedMunicipios: any
}



export const UserContext = createContext<InitialValueProps>(InitialValue)

export const UseContextProvider = ({ children }: {children : ReactNode}) => {
  const [states, setStates] = useState<StateProps[]>([])
  const [municipios, setMunicipios] = useState<MunicipioProps[]>([])
  const [stateSelected, setStateSelected] = useState('')
  const [isFilterActivate, setIsFilterActivate] = useState(false)

  async function getStates(sigla?: string) {
    await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${isFilterActivate ? `${sigla}/municipios` : ''}`)
      .then(data => {
        if (isFilterActivate) {
          setMunicipios(data.data)
        } else {
          setStates(data.data)
        }
      })
  }

  useEffect(() => {
    getStates()
  }, [])

  const selectedMunicipios = (sigla?: string) => {
    setIsFilterActivate(prevFilterActivate => !prevFilterActivate)
    getStates(sigla)
    
  }


  return (
    <UserContext.Provider value={
      {
        isFilterActivate,
        municipios,
        setIsFilterActivate,
        setMunicipios,
        setStates,
        setStateSelected,
        states,
        stateSelected,
        selectedMunicipios
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

export const useDataContext = () => useContext(UserContext)