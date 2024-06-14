import Users from "./Users";
import renderer from "react-test-renderer";

test("class component method testing", () => {
  const componentData = renderer.create(<Users />).getInstance();
  const value = "user list";
  expect(componentData.getUserList(value)).toMatch("user list");
});
