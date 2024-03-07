import { render } from "@testing-library/react-native";

import { useConvenios } from "../../src/hooks/useConvenios";
import ConveniosScreen from "../../src/screens/Convenios";

jest.mock("../../src/hooks/useConvenios", () => ({
  useConvenios: jest.fn(),
}));

describe("ConveniosScreen", () => {
  const mockedUseConvenios = useConvenios as jest.Mock;

  const mockValue = {
    groupedConvenios: {
      A: [
        {
          apelido: "AFEB",
          codigo: 108,
          codigoSite: 1,
          divulgarSite: true,
          id: 25244,
          nomeDivulgacao: "AFEB BRASAL",
          suspenso: false,
        },
        {
          apelido: "AFFEGO",
          codigo: 56,
          codigoSite: 2,
          divulgarSite: true,
          id: 25192,
          nomeDivulgacao: "AFFEGO",
          suspenso: false,
        },
        {
          apelido: "ASETE",
          codigo: 23,
          codigoSite: 4,
          divulgarSite: true,
          id: 25159,
          nomeDivulgacao: "ASETE (ASTE)",
          suspenso: false,
        },
      ],
      B: [
        {
          apelido: "BACEN",
          codigo: 104,
          codigoSite: 6,
          divulgarSite: true,
          id: 25240,
          nomeDivulgacao: "BACEN",
          suspenso: false,
        },
        {
          apelido: "BRB (SAÚDE BRB)",
          codigo: 10,
          codigoSite: 7,
          divulgarSite: true,
          id: 25146,
          nomeDivulgacao: "BRB (SAÚDE BRB)",
          suspenso: false,
        },
      ],
    },
    isLoading: false,
    getConvenios: jest.fn(),
  };

  mockedUseConvenios.mockReturnValue(mockValue);

  const renderComponent = () => {
    return render(<ConveniosScreen />);
  };

  it("should render convenios grouped by first letter", async () => {
    const { getByText, queryByText } = renderComponent();

    expect(getByText("A")).toBeTruthy();
    expect(getByText("AFFEGO")).toBeTruthy();
    expect(getByText("ASETE")).toBeTruthy();
    expect(getByText("B")).toBeTruthy();
    expect(getByText("BACEN")).toBeTruthy();
    expect(getByText("BRB (SAÚDE BRB)")).toBeTruthy();

    expect(queryByText("C")).toBeNull();
  });

  it("should render loading indicator when isLoading is true", async () => {
    const newMockValue = {
      ...mockValue,
      isLoading: true,
    };
    mockedUseConvenios.mockReturnValue(newMockValue);
    const { getByTestId } = renderComponent();
    const loadingIndicator = getByTestId("loading-indicator");

    expect(loadingIndicator).toBeTruthy();
  });
});
