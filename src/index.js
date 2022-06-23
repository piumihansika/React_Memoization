import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ParentPureComponent from "./ParentPureComponent";
import ParentMemo from "./ParentMemo";
import ComponentUseMemo from "./ComponentUseMemo"
import ParentUseCallback from "./ParentUseCallback"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <div><ParentPureComponent /> </div>
    <div> <ParentMemo/>  </div>
    <div> <ComponentUseMemo/> </div> */}
    <div><ParentUseCallback/> </div>  
  </StrictMode>,
  rootElement
);
