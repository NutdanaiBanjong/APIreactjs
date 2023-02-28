import { NavLink } from 'react-router-dom'

function products({itemdata}) {
  return(
  <>
    <div className="grid sm:grid-cols-3 gap-x-4 gap-y-5 pt-2">
      {itemdata.map(itemdata => {
        return (
          <div key={itemdata.id}>
            <NavLink to={`/products/${itemdata.id}`} >            
              <h1>name: {itemdata.title}</h1>
            </NavLink>
            <hr />
          </div>
        );
      })}
    </div>
  </>
  )
}

export default products;