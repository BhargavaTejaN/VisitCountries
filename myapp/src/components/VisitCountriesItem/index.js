import './index.css'

const VisitCountriesItem = props => {
  const {details, clickCountry} = props
  const {id, name, isVisited} = details

  const onClickCountry = () => {
    clickCountry(id)
  }

  return (
    <li className="list-item">
      <p className="country">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button onClick={onClickCountry} type="button" className="VisitStyle">
          Visit
        </button>
      )}
    </li>
  )
}

export default VisitCountriesItem
