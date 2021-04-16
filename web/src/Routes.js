import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/estimation" page={EstimationPage} name="estimation" />
      <Route path="/retroactive" page={RetroactivePage} name="retroactive" />
      <Route path="/stand-up" page={StandUpPage} name="standUp" />
      <Route path="/hangman" page={HangmanPage} name="hangman" />
      <Route path="/account/{id}" page={AccountPage} name="account" />
      <Route path="/hauptbuch" page={HauptbuchPage} name="hauptbuch" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home" role="admin">
        <Route path="/workout/{id:Int}" page={WorkoutPage} name="workout" />
        <Route path="/workouts" page={WorkoutsPage} name="workouts" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
