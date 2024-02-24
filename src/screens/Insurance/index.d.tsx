namespace Render {
  export interface renderItem<ItemT> {
    item: ItemT;
    index: number;
  }
}

namespace _ {
  export type insuranceItem = Render.renderItem<InsuranceProps>;
}

export default _;

export type InsuranceProps = {
  nomeDivulgacao: string;
  apelido: string;
};
