import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer";

//-------------------------
//will create "__snapshots__" folder
const tree = renderer.create(<App/>)
it("Test Snapshot for App Comp", ()=>{
  expect(tree).toMatchSnapshot();
})
//-------------------------
describe("Test App Comp Functionality", ()=>{
  //-----------Test 1-----------
  it("Test App has element with data-id", ()=>{
    //create virtual DOM for object component
    const {getByTestId} = render(<App/>)
    expect(getByTestId("h2Id")).toHaveTextContent("Welcome To CG");

  })
  //-----------Test 2-----------
  test("Test any element in app with message Hello", ()=>{
    render(<App/>);
    const linkElement=screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  })

  test("Test App has button with background style red",
  ()=>{
    render(<App/>);
    const btnColor = screen.getByRole("button",{name:"Change To blue"});
    fireEvent.click(btnColor) //can test click performance as well
    expect(btnColor).toHaveStyle({backgroundColor:"blue"}); //after click, btn color should be blue
    expect(btnColor.textContent).toBe("Change To red") //button text also changed
  })


})