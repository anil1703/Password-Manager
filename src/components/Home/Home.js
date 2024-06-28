import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Password from '../Password'

import './Home.css'

class Home extends Component {
  state = {
    isTrue: false,
    count: 0,
    website: '',
    username: '',
    password: '',
    searchInput: '',
    listOfPasswords: [],
  }

  typingWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  typingUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  typingPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }
  clickingAdd = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    if (
      (website.length !== 0 && username.length !== 0, password.length !== 0)
    ) {
      const hidepass = '*'.repeat(password.length)
      const passwordData = {
        id: uuidv4(),
        websiteUrl: website,
        userName: username,
        password: hidepass,
        showPass: password,
      }
      this.setState(prevState => {
        return {
          listOfPasswords: [...prevState.listOfPasswords, passwordData],
          username: '',
          website: '',
          password: '',
        }
      })
    }
  }

  clickingDelete = id => {
    const {listOfPasswords} = this.state
    const deletingData = listOfPasswords.filter(password => password.id !== id)
    this.setState({
      listOfPasswords: deletingData,
    })
  }

  searching = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  showPassword = event => {
    this.setState({
      isTrue: event.target.checked,
    })
  }
  render() {
    const {
      isTrue,
      count,
      searchInput,
      listOfPasswords,
      website,
      username,
      password,
    } = this.state
    const counte = listOfPasswords.length
    console.log(listOfPasswords)
    const searchValue = searchInput.toLowerCase()
    const newList = listOfPasswords.filter(eachPass =>
      eachPass.websiteUrl.toLowerCase().includes(searchValue),
    )
    return (
      <div className="home-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="box-1">
          <form className="form">
            <h1 className="box-head">Add New Password</h1>
            <div className="input-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="input-logo"
                alt="website"
              />
              <hr className="box-hr" />
              <input
                value={website}
                className="input-style"
                type="text"
                placeholder="Enter Website"
                onChange={this.typingWebsite}
              />
            </div>
            <div className="input-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="input-logo"
                alt="username"
              />
              <hr className="box-hr" />
              <input
                value={username}
                className="input-style"
                type="text"
                placeholder="Enter Username"
                onChange={this.typingUsername}
              />
            </div>
            <div className="input-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="input-logo"
                alt="password"
              />
              <hr className="box-hr" />
              <input
                value={password}
                className="input-style"
                type="password"
                placeholder="Enter Password"
                onChange={this.typingPassword}
              />
            </div>
            <button onClick={this.clickingAdd} type="submit" className="addBtn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="box-poster"
          />
        </div>
        <div className="box-2">
          <div className="box2-div">
            <h1 className="box-head">
              Your Passwords <span><p>{counte}</p></span>
            </h1>
            <div className="searchbox">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-icon"
                alt="search"
              />
              <hr className="box-hr" />
              <input
                type="search"
                placeholder="search"
                className="search-input"
                onChange={this.searching}
              />
            </div>
          </div>
          <hr className="hori-line" />
          <div className="show">
            <input onChange={this.showPassword} id="show" type="checkbox" />
            <label htmlFor="show">show Passwords</label>
          </div>
          {counte !== 0 ? (
            newList.length !== 0 ? (
              <ul className="ulStyle">
                {newList.map(eachItem => (
                  <Password
                    data={eachItem}
                    key={eachItem.id}
                    clickingDelete={this.clickingDelete}
                    seting={isTrue}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="noPass"
                />
                <p>No Passwords</p>
              </div>
            )
          ) : (
            <div className="no-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="noPass"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
