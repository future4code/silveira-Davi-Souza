import React, {useState} from "react";
import Person from "./components/Person/Person";
import Matches from "./components/Matches/Matches";
import { Main } from "./Styled";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  const toPage = () => {
    switch (currentPage) {
      case "list":
        return (
          <div>
            <Person
              switchPage={setCurrentPage}
            />
          </div>
        )
      
      case "match":
        return (
          <div>
              <Matches
                switchPage={setCurrentPage}
              />
          </div>
        )

      default:
        return (
          <div>
            <Person
              switchPage={setCurrentPage}
            />
          </div>
        )
    };
  };

  return (
    <Main>
      {toPage()}
    </Main>
  );
}

export default App;
