import './index.css'

const UserInfo = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList

  return (
    <li className="items-container">
      <div className="blogs-details">
        <h1 className="blogs-name">{title}</h1>
        <p className="blogs-publishedDate">{publishedDate}</p>
      </div>
      <p className="blogs-description">{description}</p>
    </li>
  )
}

export default UserInfo
