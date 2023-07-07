import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Card from './components/Card'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />

      <Navbar />
      <div className="app-container">
        <Card />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Switch>
  </>
)

export default App
