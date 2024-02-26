import { renderApp, waitFor } from "__test__/helpers/test-app";
import { News } from "..";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
jest.mock("date-fns", () => ({ format: jest.fn() }));

describe("News", () => {
  it("renders News component with news", async () => {
    mock
      .onGet("https://api-site.amhp.com.br/api/noticias/recentes/8")
      .reply(200, mockNewsData);

    const screen = renderApp(<News />);

    expect(screen.getByTestId("loading")).toBeOnTheScreen();
    expect(screen.getByText("Notícias")).toBeOnTheScreen();

    await waitFor(() => {
      expect(screen.getByTestId("news-image")).toBeOnTheScreen();
      expect(screen.getByTestId("news-time")).toBeOnTheScreen();
      expect(screen.getByTestId("news-title")).toBeOnTheScreen();
    });

    expect(screen.queryByTestId("loading")).not.toBeOnTheScreen();
  });
});

const mockNewsData = [
  {
    imagem: "urlImagemMobile",
    titulo: "titulo",
    dataCriacao: "dataCriacao",
  },
];
