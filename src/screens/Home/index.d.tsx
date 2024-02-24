namespace Render {
  export interface renderItem<ItemT> {
    item: ItemT;
    index: number;
  }
}

namespace _ {
  export type BannerItem = Render.renderItem<BannerProps>;

  export type newsItem = Render.renderItem<NewsProps>;
}

export default _;

export type BannerProps = {
  linkRedirecionamento: string;
  urlImagemMobile: string;
};

export type NewsProps = {
  imagem: string;
  titulo: string;
  dataCriacao: string;
};
