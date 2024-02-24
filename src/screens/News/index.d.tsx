namespace Render {
  export interface renderItem<ItemT> {
    item: ItemT;
    index: number;
  }
}

namespace _ {
  export type newsItem = Render.renderItem<NewsProps>;
}

export default _;

export type NewsProps = {
  imagem: string;
  titulo: string;
  dataCriacao: string;
};
