/* eslint-disable react/no-unknown-property */
import { useDispatch, useSelector } from "react-redux";
import Incident from "../Incident/Incident";
import { useEffect, useState } from "react";
import { postTransition } from "../../redux/actions/transitions/postTransition";
import { getIssue } from "../../redux/actions/issue/getIssue";

const Tablero = () => {
  const dispatch = useDispatch()
  const incidents = useSelector((state) => state.incients)
  const [incident, setIncident] = useState(incidents)

  useEffect(()=> {
    getIssue()
  }, [])

  const getList = (list) => {
    return incidents.filter((incident) =>  incident.fields.status.name == list)
}

  const startDrag = (evt, item) => {
      evt.dataTransfer.setData('itemID', item.id)
      console.log(item);
  }

  const draggingOver = (evt) => {
      evt.preventDefault();
  }

  const onDrop = (evt, list) => {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = incidents.find(item => item.id == itemID);
      console.log('item', item)

      const data = {
        id: item.id,
        list: list
      }
      postTransition(data)(dispatch).then((response) => {
        console.log('response', response)
      }).catch((error) => console.log('tablero L38', error))
      item.list = list; 

      const newState = incident.map(task => {
          if(task.id === itemID) return item;
          return task
      })

      setIncident(newState);
  }
  
  return (
    
      <div className="flex justify-center mx-20 mt-10">
        <div className="grid grid-cols-3 gap-3 mx-2">
          <div >
            <div droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, "Por hacer"))} className="border rounded-2xl px-8 py-5 min-h-full">
              {getList("Por hacer").map((item, i) => (
                <div key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                  <Incident 
                    key={item.fields.key}
                    id={item.id}
                    img={item.image}
                    title={item.fields.summary}
                    description={item.fields.summary}
                    state={item.fields.status.name}
                    coments={item.fields.comment.comments}
                    responsable={item.fields?.assignee}
                    hsConsumidas={item.fields.timetracking.timeSpent}
                    hsEstimadas={item.fields.timetracking.remainingEstimate}
                    progress={item.process}
                    adjs={item.adjs}
                    priority={item[i]}
                  />
                  </div>
              ))}
            </div>
          </div>
          <div>
            <div droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, "En curso"))} className="border rounded-2xl  px-8 py-5 min-h-full">
              {getList("En curso").map((item, i)=> (
                <div  key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                  <Incident 
                    key={item.fields.key}
                    id={item.id}
                    img={item.image}
                    title={item.fields.summary}
                    description={item.fields.summary}
                    state={item.fields.status.name}
                    coments={item.fields.comment.comments}
                    responsable={item.fields.assignee}
                    hsConsumidas={item.fields.timetracking.timeSpent}
                    hsEstimadas={item.fields.timetracking.remainingEstimate}
                    progress={item.process}
                    adjs={item.adjs}
                    priority={item[i]}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, "Listo"))} className="border rounded-2xl  px-8 py-5 min-h-full">
              {getList("Listo").map((item, i)=> (
                <div key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                  <Incident 
                    key={item.fields.key}
                    id={item.id}
                    img={item.image}
                    title={item.fields.summary}
                    description={item.fields.summary}
                    state={item.fields.status.name}
                    coments={item.fields.comment.comments}
                    responsable={item.fields.assignee}
                    hsConsumidas={item.fields.timetracking.timeSpent}
                    hsEstimadas={item.fields.timetracking.remainingEstimate}
                    progress={item.process}
                    adjs={item.adjs}
                    priority={item[i]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Tablero;