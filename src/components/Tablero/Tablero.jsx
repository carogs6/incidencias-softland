// import { useState } from "react";

import { useSelector } from "react-redux";
import Incident from "../Incident/Incident";

const Tablero = () => {
  const incidents = useSelector((state) => state.incients)
  console.log('incidents', incidents)
  // const posts = [
  //   {
  //     id:1,
  //     image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  //     title: "5 Easy Tips That Will Make Your Latte Art Flourish",
  //     description:"Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
  //     column: "finish",
  //     state:"",
  //     coments: "",
  //     responsable: "",
  //     hsConsumidas: "",
  //     hsEstimadas: "",
  //     progress: "",
  //     adjs: "",
  //   },
  //   {
  //     id:2,
  //     image: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
  //     title: "Coffee Roasting Basics: Developing Flavour by Roasting",
  //     description: "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
  //     column: "inProgress",
  //     state:"",
  //     coments: "",
  //     responsable: "",
  //     hsConsumidas: "",
  //     hsEstimadas: "",
  //     progress: "",
  //     adjs: "",
  //   },
  //   {
  //     id:3,
  //     image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
  //     title: "Latte vs. Flat White - What is the Difference?",
  //     description: "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
  //     column: "finish",
  //     state:"",
  //     coments: "",
  //     responsable: "",
  //     hsConsumidas: "",
  //     hsEstimadas: "",
  //     progress: "",
  //     adjs: "",
  //   },
  //   {
  //     id:4,
  //     image:
  //           "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
  //     title: "Creating the Perfect Espresso Recipe",
  //     description:"Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
  //     column: "inProgress",
  //     state:"",
  //     coments: "",
  //     responsable: "",
  //     hsConsumidas: "",
  //     hsEstimadas: "",
  //     progress: "",
  //     adjs: "",
  //   },
  //   {
  //     id:5,
  //     image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  //     title: "5 Easy Tips That Will Make Your Latte Art Flourish",
  //     description:"Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
  //     column: "toDo",
  //     state:"",
  //     coments: "",
  //     responsable: "",
  //     hsConsumidas: "",
  //     hsEstimadas: "",
  //     progress: "",
  //     adjs: "",
  //   },
  //   {
  //     id:6,
  //     image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  //     title: "5 Easy Tips That Will Make Your Latte Art Flourish",
  //     description:"Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
  //     column: "inProgress",
  //     state:"",
  //     coments: "",
  //     responsable: "",
  //     hsConsumidas: "",
  //     hsEstimadas: "",
  //     progress: "",
  //     adjs: "",
  //   },
  //   {
  //     id:7,
  //     image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
  //     title: "Latte vs. Flat White - What is the Difference?",
  //     description: "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
  //     column: "toDo",
  //     state:"",
  //     coments: "",
  //     responsable: "",
  //     hsConsumidas: "",
  //     hsEstimadas: "",
  //     progress: "",
  //     adjs: "",
  //   },
  // ];

  const incidentToDo = incidents.filter((incident) =>  incident.fields.status.name === "Tareas por hacer")
  const incidentinProgress = incidents.filter((incident) => incident.fields.status.name == "En curso")
  const incidentFinish = incidents.filter((incident) => incident.fields.status.name == "Finalizada")
  console.log('incidentToDo', incidentToDo)

  // const [ incidentToDoCol, setIncidentToDoCol ] = useState(incidentToDo)
  // const [ inProgresshCol, setInProgress ] = useState(incidentinProgress)
  // const [ finishCol, setFinishCol ] = useState(incidentFinish)
  
  return (
    <div className="flex justify-center mx-20 mt-10">
      <div className="grid grid-cols-3 gap-3 mx-2">
        <div className="border rounded-2xl px-8 py-5">
        {incidentToDo.map((item, i) => (
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
  ))}

            
        </div>
        <div className="border rounded-2xl  px-8 py-5">
          {incidentinProgress?.map((item, i)=> (
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
          ))}
        </div>
        <div className="border rounded-2xl  px-8 py-5">
          {incidentFinish?.map((item, i)=> (
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
          ))}
        </div >
      </div>
    </div>
  )
}

export default Tablero;