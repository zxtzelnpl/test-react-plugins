import * as React from "react";
import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";
// import SimpleTransition from './reactMotionDemos/SimpleTransition';
// import ChatHeads from './reactMotionDemos/ChatHeads';
// import DraggableBalls from './reactMotionDemos/DraggableBalls';
import RequestAndCancel from './components/RequestAndCancel'


const App = ()=><React.Fragment>
    {/*<Hello compiler="TypeScript" framework="React" />*/}
    {/*<SimpleTransition compiler="TypeScript" framework="React" />*/}
    {/*<ChatHeads compiler="TypeScript" framework="React"/>*/}
    {/*<DraggableBalls />*/}
    <RequestAndCancel />
</React.Fragment>



ReactDOM.render(
    <App />,
    document.getElementById("root")
);
