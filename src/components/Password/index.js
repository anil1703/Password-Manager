import './index.css'

const Password = props => {
  const {data, clickingDelete, seting} = props
  const {websiteUrl, userName, showPass, password, id} = data
  const firstLetter = websiteUrl[0]
  const deleting = () => {
    clickingDelete(id)
  }
  return (
    <li className="liStyle">
      <div className="round">
        <p>{firstLetter}</p>
      </div>
      <div>
        <p>{websiteUrl}</p>
        <p>{userName}</p>
        <p>{seting ? showPass : password}</p>
      </div>
      <button data-testid="delete" className="delete-div">
        <img
          onClick={deleting}
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteButn"
        />
      </button>
    </li>
  )
}
export default Password
