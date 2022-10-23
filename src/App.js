import './App.css';
import Header from './components/Header/Header'
import CodeLink from './components/CodeLink/CodeLink'
import maxSumSubArray from './util/images/code/maxSumSubArray.png'
import ParticlesBg from 'particles-bg'
import {problems} from './constants/problems'

const App = () => {

  let name = "Max Sum Subarray"
  let description = "Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’."
  let difficulty = "Medium"
  let solution = maxSumSubArray

  return (
    <div className="App">
      <ParticlesBg color="#5159EE" type="cobweb" bg={true} />
      <Header />
      <CodeLink 
        name={name} 
        description={description}
        difficulty = {difficulty} 
        solution={solution}>
      </CodeLink>
      {problems.map(
        (problem) => (
          <div key={problem.id} className="codelink-container">
              <CodeLink 
                name={problem.name} 
                description={problem.description} 
                difficulty={problem.difficulty} 
                solution={problem.solution}>
              </CodeLink>
          </div>
        )
      )}
      <div className="homepage-footer"></div>
    </div>
  );
}

export default App;
