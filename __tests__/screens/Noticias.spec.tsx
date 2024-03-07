import { render } from "@testing-library/react-native";

import { useNoticias } from "../../src/hooks/useNoticias";
import NoticiasScreen from "../../src/screens/Noticias";

jest.mock("../../src/hooks/useNoticias", () => ({
  useNoticias: jest.fn(),
}));

describe("NoticiasScreen", () => {
  const mockedUseNoticias = useNoticias as jest.Mock;

  const mockValue = {
    news: [
      {
        id: 1,
        titulo: "Notícia teste 1",
        resumo: "Resumo da notícia teste 1",
        dataCriacao: "2024-02-15T00:00:00",
        isPublicada: true,
        isImportante: false,
      },
      {
        id: 2,
        titulo: "Notícia teste 2",
        resumo: "Resumo da notícia teste 2",
        dataCriacao: "2024-03-16T00:00:00",
        isPublicada: true,
        isImportante: false,
      },
      {
        id: 3,
        titulo: "Notícia teste 3",
        resumo: "Resumo da notícia teste 3",
        dataCriacao: "2024-02-17T00:00:00",
        isPublicada: true,
        isImportante: false,
      },
      {
        id: 4,
        titulo: "Notícia teste 4",
        resumo: "Resumo da notícia teste 4",
        dataCriacao: "2024-03-18T00:00:00",
        isPublicada: true,
        isImportante: false,
      },
    ],
    isLoading: false,
    getLatestNews: jest.fn(),
  };

  mockedUseNoticias.mockReturnValue(mockValue);

  const renderComponent = () => {
    return render(<NoticiasScreen />);
  };

  it("should render the news correctly", async () => {
    const { getByText } = renderComponent();
    const resumoNews1 = getByText("Resumo da notícia teste 1");
    const dateNews1 = getByText("15 fev 24");
    const resumoNews2 = getByText("Resumo da notícia teste 2");
    const dateNews2 = getByText("16 mar 24");

    expect(resumoNews1).toBeTruthy();
    expect(dateNews1).toBeTruthy();
    expect(resumoNews2).toBeTruthy();
    expect(dateNews2).toBeTruthy();
  });

  it("should render loading indicator when isLoading is true", async () => {
    const newMockValue = {
      ...mockValue,
      isLoading: true,
    };
    mockedUseNoticias.mockReturnValue(newMockValue);
    const { getByTestId } = renderComponent();
    const loadingIndicator = getByTestId("loading-indicator");

    expect(loadingIndicator).toBeTruthy();
  });
});
