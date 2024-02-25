import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {

  const [porjectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    porjects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if(porjectsState.selectedProjectId === null) {
    content = <NewProject />
  }else if (porjectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
