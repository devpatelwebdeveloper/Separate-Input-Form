import "./styles.css";
import Form from "./Components/Form/Form";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Form
        fields={{
          firstName: {
            type: "text",
            value: "",
            show: true,
            label: "First Name"
          }
          // email: "",
          // phone: ""
        }}
        // hiddenFields={{
        //   elqSiteID: "elqSiteID",
        //   language: "en-CA",
        //   elqFormName: "UntitledForm-1579809113440"
        // }}
      />
    </div>
  );
}
