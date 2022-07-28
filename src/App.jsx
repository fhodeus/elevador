import { Elevator } from "./components/Elevator";
import { BoardControl } from "./components/BoardControl";

import { Helmet } from "react-helmet";

import { ElevatorProvider } from "./hooks/ElevatorContext";

export const App = () => (
  <>
    <Helmet>
      <script type="text/javascript" src="/clarity.js"></script>
    </Helmet>
    <div className="container">
      <ElevatorProvider>
        <div className="row">
          <div className="col-4 col-md-3">
            <Elevator />
          </div>
          <div className="mx-auto mx-sm-0 col-7 col-lg-3 ">
            <BoardControl />
          </div>
        </div>
      </ElevatorProvider>
    </div>
  </>
);

export default App;
