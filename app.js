import './App.css'
import IncrementingButton from './problems/IncrementingButton';
import WorkingWithArrays from './problems/WorkingWithArrays';
import ProblemWrapper from './ProblemWrapper';

// Ground Rules:
// Anything goes... you can google it, you can ask questions, you can do basically anything except "Phone a Friend". 

// As a programmer, we are always dealing with things we do not know, and to be honest it's impossible to remember everything off the top of your head. 
// So, we rely on documentation and our tools such as IDEs to help us be productive. I'm just here to watch you think and see how you process information. 
// The worst thing you can do is: nothing. If you just sit there and stare, then there's no chance. If you struggle through something and talk through it, then
// I'm glad to facilitate. 

// Prerequisites:
// - npm install
// - npm run dev

// TODO - first create a branch /interviews/{lastname-firstname}
// 1. Add a background color on the entire page to be #282c34 (text white)
// 2. Add a block of larger text on the page with your name
// 3. Add some spacing around the entire page
// 4. Add some padding or margin around each question 
// 5. Make the description of the question bold and a little larger

function App() {
  return (
    <div>
      <h1>Patrick Brennan</h1>
      <ProblemWrapper description="Implement incrementing button.">
        <IncrementingButton />
      </ProblemWrapper>

      <ProblemWrapper description="Working with arrays">
        <WorkingWithArrays input={[1, 2, 3, 4, 5]} />
      </ProblemWrapper>
    </div>
  )
}

export default App