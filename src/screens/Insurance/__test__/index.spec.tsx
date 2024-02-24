import { renderApp, waitFor } from "__test__/helpers/test-app";
import { Insurance } from "..";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
jest.mock("date-fns", () => ({ format: jest.fn() }));

describe("News", () => {
  it("renders News component with news", async () => {
    mock
      .onGet("https://api-site.amhp.com.br/api/convenios/ativos")
      .reply(200, mockNewsData);

    const screen = renderApp(<Insurance />);

    expect(screen.getByTestId("loading")).toBeOnTheScreen();
    expect(screen.getByText("Convênios")).toBeOnTheScreen();

    await waitFor(() => {
      expect(screen.getByTestId("insurance-title")).toBeOnTheScreen();
    });

    expect(screen.queryByTestId("loading")).not.toBeOnTheScreen();
  });
});

const mockNewsData = [
  {
    nomeDivulgacao: "nomeDivulgacao",
  },
];
