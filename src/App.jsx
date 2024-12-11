const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed"
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed"
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed"
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed"
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog"
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress"
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog"
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress"
  }
];

// Creo gli array dove andranno poi inseriti i due valori principali; completed e other
function App() {
  const completed = tasks.filter(curCompleted => curCompleted.state === "completed");
  const other = tasks.filter(curOther => curOther.state !== "completed");
  
  console.log(completed);
  console.log(other);

  function firstList(){
    const jsxListCompleted = completed.map((curTask) =>{
      return(
    
      <li key={curTask.id}>
        <h4>{curTask.title}</h4>
        {/* <span className="tag completed">completed</span> */}
        <p>Priority: {curTask.priority}</p>
        <p>Est.Time: {curTask.estimatedTime}</p>
      </li>
      )
    })
    return jsxListCompleted
  }

  function secondList(){
    const jsxSecondList = other.map((curOtherTask)=>{
      return(
        <li key={curOtherTask.id}>
        <h4>{curOtherTask.title}</h4>
        {/* <span className={`tag ${curOtherTask.state}`}>{curOtherTask.state}</span> */}
        <p>Priority: {curOtherTask.priority}</p>
        <p>Est.time:{curOtherTask.estimatedTime}</p>
      </li>

      )
    })
    return jsxSecondList
  }
  return (
    <div className="pippo">
    <h1 className="container">Task manager</h1>
    <h3 className="container padding">Current Tasks (4)</h3>
      <ul className="container padding">{secondList()}</ul>
      <br />
      <hr />
      <h4 className="container padding">Completed Tasks (6)</h4>
      <ul className="container padding">{firstList()}</ul>
    </div>
  )
};

export default App
