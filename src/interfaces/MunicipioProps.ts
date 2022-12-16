import { StateProps } from "./StateProps"

export interface MunicipioProps {
  id: number
  nome: string
  microrregiao: {
    id: number
    nome: string
    mesorregiao: {
      id: number
      nome: string
      UF: StateProps
    }
  }
  regiao_imediata: {
    id: number
    nome: string
    regiao_intermediaria: {
      id: number
      nome: string
      UF: {
        id: number
        sigla: string
        nome: string
        regiao: {
          id: number
          sigla: string
          nome: string
        }
      }
    }
  }
}