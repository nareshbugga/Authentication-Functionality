// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="align">
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
