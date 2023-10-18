import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectedIncident from "../components/selectedIncident/selectedIncident";
import { getProjects } from "../redux/actions/projects/getProjects";

const Home = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  console.log('projects', projects)

  useEffect(() => {
    issueList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const issueList = async () => {
    await getProjects()(dispatch).then((response) =>{ 
      return console.log('response', response)
    }).catch((error) => {throw error})

    
  }

  
  return (<div className="flex flex-col">
      <SelectedIncident projects={projects} />
  </div>
  )
}

export default Home;