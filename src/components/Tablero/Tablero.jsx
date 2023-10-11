// import { useState } from "react";

import Incident from "../Incident/Incident";

const Tablero = () => {
  const posts = [
    {
      id:1,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      title: "5 Easy Tips That Will Make Your Latte Art Flourish",
      description:"Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
      column: "finish",
      state:"",
      coments: "",
      responsable: "",
      hsConsumidas: "",
      hsEstimadas: "",
      progress: "",
      adjs: "",
    },
    {
      id:2,
      image: "https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed",
      title: "Coffee Roasting Basics: Developing Flavour by Roasting",
      description: "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
      column: "inProgress",
      state:"",
      coments: "",
      responsable: "",
      hsConsumidas: "",
      hsEstimadas: "",
      progress: "",
      adjs: "",
    },
    {
      id:3,
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
      title: "Latte vs. Flat White - What is the Difference?",
      description: "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
      column: "finish",
      state:"",
      coments: "",
      responsable: "",
      hsConsumidas: "",
      hsEstimadas: "",
      progress: "",
      adjs: "",
    },
    {
      id:4,
      image:
            "https://images.unsplash.com/photo-1459257868276-5e65389e2722",
      title: "Creating the Perfect Espresso Recipe",
      description:"Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
      column: "inProgress",
      state:"",
      coments: "",
      responsable: "",
      hsConsumidas: "",
      hsEstimadas: "",
      progress: "",
      adjs: "",
    },
  ];

  const incidentToDo = posts.filter((post) =>  post.column == "toDo")
  const incidentinProgress = posts.filter((post) => post.column == "inProgress")
  const incidentFinish = posts.filter((post) => {post.column == "finish"})

  // const [ incidentToDoCol, setIncidentToDoCol ] = useState(incidentToDo)
  // const [ inProgresshCol, setInProgress ] = useState(incidentinProgress)
  // const [ finishCol, setFinishCol ] = useState(incidentFinish)
  
  return (
    <div className="flex justify-between">
      <div className="w-1/4">
      {incidentToDo?.map((item, i) => <Incident 
            key={item.id}
            img={item.image}
            title={item.title}
            description={item.description}
            state={item.state}
            coments={item.coments}
            responsable={item.responsable}
            hsConsumidas={item.hsConsumidas}
            hsEstimadas={item.hsEstimadas}
            progress={item.progress}
            adjs={item.adjs}
            priority={item[i]}
        />
)}

          
      </div>
      <div className="w-1/4">
        {incidentinProgress?.map((item, i)=> {
            <Incident 
              key={item.id}
              img={item.image}
              title={item.title}
              description={item.description}
              state={item.state}
              coments={item.coments}
              responsable={item.responsable}
              hsConsumidas={item.hsConsumidas}
              hsEstimadas={item.hsEstimadas}
              progress={item.process}
              adjs={item.adjs}
              priority={item[i]}

            />
        })}
      </div>
      <div className="w-1/4">
        {incidentFinish?.map((item, i)=> {
            <Incident 
              key={item.id}
              img={item.image}
              title={item.title}
              description={item.description}
              state={item.state}
              coments={item.coments}
              responsable={item.responsable}
              hsConsumidas={item.hsConsumidas}
              hsEstimadas={item.hsEstimadas}
              progress={item.process}
              adjs={item.adjs}
              priority={item[i]}

            />
        })}
      </div >
    </div>
  )
}

export default Tablero;