import './index.css'

const VisitedCountries = props => {
  const {details, removeCountry} = props
  const {id, name, imageUrl} = details

  const onRemoveCountry = () => {
    removeCountry(id)
  }

  return (
    <li className="country-container">
      <img className="img" alt="thumbnail" src={imageUrl} />
      <div className="bottom-container">
        <p className="name">{name}</p>
        <button type="button" className="button" onClick={onRemoveCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
