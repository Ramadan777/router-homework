import React from 'react'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import Content from './Content'
import Footer from './Footer'
import FeaturesPage from './FeaturesPage'
import ContactsPage from './ContactsPage'
import NotFound from './NotFound'

function Header (props) {

  return (
    <div>
      <div className="header">
        <h3>Cover</h3>
        <div className="nav">
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
          <NavLink exact to="/features" activeClassName="selected">
            Features
          </NavLink>
          <NavLink exact to="/contacts" activeClassName="selected">
            Contact
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Content />
          <Footer />
        </Route>
        <Route path="/features">
          <FeaturesPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default Header