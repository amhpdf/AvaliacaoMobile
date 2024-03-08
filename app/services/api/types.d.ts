export interface IBanner {
  id: number,
  urlImagemMobile: string,
  dataPublicacao: string,
  titulo: string,
  subtitulo: string | null
}

export interface INewsRecent {
  id: number,
  imagem: string,
  titulo: string,
  resumo: string,
}

export interface INewsRecentHome extends INewsRecent {}