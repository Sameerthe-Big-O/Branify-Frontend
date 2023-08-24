
import './App.css';
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import ImageForm from './components/imageForm/imageForm';
import Rank from './components/rank/rank';
import ParticlesBg from 'particles-bg';
import FacRecognition from './components/faceRecognition/faceRecognition';
import React from 'react';
import clarifySetup from './utils/setupClarify';
import SignIn from './components/signin/signin';
import Register from './components/register/register';


const MODEL_ID = 'face-detection';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      input: '',
      box: {},
      route: "signin",
      isSignIn: 'false'
    }
  }

  onInPutChange = (event) => {
    this.setState({ input: event.target.value });
  }

  calculateFaceLocation = (data) => {
    const apiData = data.outputs[0].data.regions[0].region_info.bounding_box;



    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: apiData.left_col * width,
      topRow: apiData.top_row * height,
      rightCol: width - (apiData.right_col * width),
      bottomRow: height - (apiData.bottom_row * height)
    }
  }

  displayBox = (box) => {

    this.setState({ box: box })
  }

  onSubmit = async () => {
    try {
      const data = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", clarifySetup(this.state.input));
      const result = await data.json();

      this.displayBox(this.calculateFaceLocation(result));

    }
    catch (error) {
      throw new Error(error.message)
    }
  }

  onRouteChange = (route, logged) => {
    this.setState({ isSignIn: logged });
    this.setState({
      route:
        route
    })
  }


  render() {
    const { isSignIn, input, box, } = this.state;
    return (
      <div className="App" >
        <ParticlesBg num={400} type="circle" bg={true} />
        <Navigation onRouteChange={this.onRouteChange} isLoggedIn={isSignIn} />

        {
          this.state.route === 'signin' ? <SignIn onRouteChange={this.onRouteChange} /> :
            this.state.route === 'register' ?
              <Register onRouteChange={this.onRouteChange} />
              : <>
                <Logo />
                <ImageForm onInPutChange={this.onInPutChange} onSubmit={this.onSubmit} />
                <Rank />
                <FacRecognition box={box} urlImage={input} />
              </>
        }

      </div>
    );
  }
}

export default App;
