import ListItems from "./ListItems"

function Lists({ todos, done, del }) {

     if (todos.length <= 0) {
          return (
               <div className="bg-danger p-3">
                    <h2 className="text-white text-center">There is nothing to do</h2>
               </div>
          )
     }

     return (
          <div className="listWrap">
               <ul className="list-group">
                    {
                         todos && todos.map((todo) => (
                              <ListItems
                                   key={todo.id}
                                   id={todo.id}
                                   title={todo.title}
                                   done={todo.done}
                                   doneHandler={done}
                                   deleteHandler={del}
                              />
                         ))
                    }


               </ul>
          </div>
     )
}

export default Lists
