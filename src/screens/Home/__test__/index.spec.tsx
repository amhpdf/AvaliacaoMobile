import { renderApp, waitFor } from "__test__/helpers/test-app";
import { Home } from "..";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
jest.mock("date-fns", () => ({ format: jest.fn() }));

describe("Home", () => {
  it("renders Home component with banner and news", async () => {
    mock
      .onGet("https://api-site.amhp.com.br/api/banners/publicados")
      .reply(200, mockBannerData);

    mock
      .onGet("https://api-site.amhp.com.br/api/noticias/recentes-home/4")
      .reply(200, mockNewsData);

    const screen = renderApp(<Home />);

    expect(screen.getByTestId("loading-banner")).toBeOnTheScreen();
    expect(screen.getByTestId("loading-news")).toBeOnTheScreen();

    await waitFor(() =>
      expect(screen.getByTestId("banner-touchable")).toBeOnTheScreen()
    );

    await waitFor(() =>
      expect(screen.getByTestId("news-image")).toBeOnTheScreen()
    );

    expect(screen.getByTestId("banner-touchable")).toBeOnTheScreen();
    expect(screen.getByTestId("banner-image")).toBeOnTheScreen();
    expect(screen.getByTestId("banner-indicator")).toBeOnTheScreen();

    expect(screen.getByTestId("separator")).toBeOnTheScreen();

    expect(screen.getByTestId("news-time")).toBeOnTheScreen();
    expect(screen.getByTestId("news-title")).toBeOnTheScreen();
    expect(screen.getByTestId("news-button-title")).toBeOnTheScreen();

    expect(screen.queryByTestId("loading-banner")).not.toBeOnTheScreen();
    expect(screen.queryByTestId("loading-news")).not.toBeOnTheScreen();
  });
});

const mockBannerData = [
  {
    linkRedirecionamento: "linkRedirecionamento",
    urlImagemMobile: "urlImagemMobile",
  },
];

const mockNewsData = [
  {
    imagem: "urlImagemMobile",
    titulo: "titulo",
    dataCriacao: "dataCriacao",
  },
];
