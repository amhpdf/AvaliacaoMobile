import { render } from "@testing-library/react-native";
import HomeScreen from "../../src/screens/Home";
import { useHome } from "../../src/hooks/useHome";

jest.mock("../../src/hooks/useHome", () => ({
  useHome: jest.fn(),
}));

describe("HomeScreen", () => {
  const originalError = console.error; 

  beforeAll(() => {
    console.error = jest.fn(); // Warning: An update to BaseLayout inside a test was not wrapped in act(...).
  });

  afterAll(() => {
    console.error = originalError;
  });

  const mockedUseHome = useHome as jest.Mock;

  const mockValue = {
    banners: [
      {
        id: 1,
        urlImagemMobile: "imagem.jpg",
      },
      {
        id: 2,
        urlImagemMobile: "imagem.jpg",
      },
    ],
    latestFourNews: [
      {
        id: 1,
        titulo: "Notícia teste 1",
        resumo: "Resumo da notícia teste 1",
        dataCriacao: "2024-02-16T00:00:00",
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
    ],
    isLoading: false,
    isLoadingLatestFourNews: false,
    fetchData: jest.fn(),
  };

  mockedUseHome.mockReturnValue(mockValue);

  const renderComponent = () => {
    return render(<HomeScreen />);
  };

  it("should render carousel", async () => {
    const { getByTestId, queryByTestId } = renderComponent();
    const loadingIndicator = queryByTestId("loading-indicator");
    const carousel = getByTestId("carousel");

    expect(loadingIndicator).toBeNull();
    expect(carousel).toBeTruthy();
  });

  it("should render title of content news and the horizontal list of news", async () => {
    const { getByTestId, getByText } = renderComponent();
    const titleContentNews = getByTestId("content-news-title");
    const news1 = getByText("Resumo da notícia teste 1");
    const news2 = getByText("Resumo da notícia teste 1");

    expect(titleContentNews).toBeTruthy();
    expect(news1).toBeTruthy();
    expect(news2).toBeTruthy();
  });

  it("should render loading indicator when isLoading is true", async () => {
    const newMockValue = {
      ...mockValue,
      isLoading: true,
    };
    mockedUseHome.mockReturnValue(newMockValue);
    const { getByTestId } = renderComponent();
    const loadingIndicator = getByTestId("loading-indicator");

    expect(loadingIndicator).toBeTruthy();
  });
});
