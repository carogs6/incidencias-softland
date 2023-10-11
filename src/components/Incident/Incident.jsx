const Incident = (prop) => {
  return (
    <div className="w-full h-full bg-amber-200 flex justify-center">
      <h1>{prop.title}</h1>
      {/* <img src={prop.img} alt="" className="w-1/2"/>
      <p>{prop.description}</p>
      <p>{prop.state}</p>
      <p>{prop.coments}</p>
      <p>{prop.responsable}</p>
      <p>{prop.hsConsumidas}</p>
      <p>{prop.hsEstimadas}</p>
      <p>{prop.process}</p>
      <p>{prop.priority}</p> */}
    </div>
  )
}

export default Incident;