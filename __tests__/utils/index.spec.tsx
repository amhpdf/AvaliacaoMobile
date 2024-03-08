import { formatDate } from "../../src/utils";

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const dateString = "2024-02-06T00:00:00";
    const formattedDate = formatDate(dateString);

    expect(formattedDate).toEqual("06 fev 24");
  });
});
