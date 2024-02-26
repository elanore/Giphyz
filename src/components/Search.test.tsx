import { render, screen, fireEvent } from "@testing-library/react";

import Search from "./Search";

describe("App component", () => {
   const mockSearchData = vi.fn();
   
  it("should render app component", () => {
    const searchData = vi.fn();
    render(<Search searchData={searchData} />);
    expect(screen.findAllByTestId("search")).toBeTruthy();
  });
   it("renders correctly", () => {
     const { getByTestId } = render(<Search searchData={mockSearchData} />);
     const searchDiv = getByTestId("search");
     const searchBox = getByTestId("searchbox");
     const searchBtn = getByTestId("searchBtn");

     expect(searchDiv).toBeInTheDocument();
     expect(searchBox).toBeInTheDocument();
     expect(searchBtn).toBeInTheDocument();
   });

  it("should submit on click", () => {
    const searchData = vi.fn();
    render(<Search searchData={searchData} />);
    fireEvent.click(screen.getByText("GO"));
    expect(searchData).toHaveBeenCalled();
  });

  it("should allow user to input value", async () => {
    const searchData = vi.fn();
    const event = {
      target: {
        value: "hello",
      },
    };
    render(<Search searchData={searchData} />);
    const searchbox = screen.getByTestId("searchbox");
    fireEvent.change(searchbox, event);
    fireEvent.click(screen.getByText("GO"));
    expect(searchData).toHaveBeenCalledWith("hello");
  });
});
