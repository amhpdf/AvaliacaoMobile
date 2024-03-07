export interface IBanner {
  id: number;
  titulo: string;
  subtitulo: string | null;
  ordenacao: number;
  dataExpiracao: string | null;
  dataPublicacao: string;
  linkRedirecionamento: string | null;
  imagemDesktop: string | null;
  imagemMobile: string | null;
  imagemDesktopNome: string | null;
  imagemMobileNome: string | null;
  imagemDesktopExtensao: string | null;
  imagemMobileExtensao: string | null;
  urlImagemDesktop: string;
  urlImagemMobile: string;
  imagemDesktopNomeOriginal: string;
  imagemDesktopNomeS3: string;
  imagemMobileNomeOriginal: string;
  imagemMobileNomeS3: string;
  isVantagem: boolean;
}

export interface INews {
  id: number;
  titulo: string;
  resumo: string;
  imagem: string;
  dataCriacao: string;
  isPublicada: boolean;
  isImportante?: boolean | null;
}

export interface IConvenio {
  id: number;
  apelido: string;
  codigo: number;
  suspenso: boolean;
  divulgarSite: boolean;
  nomeDivulgacao: string;
  codigoSite: number;
}
