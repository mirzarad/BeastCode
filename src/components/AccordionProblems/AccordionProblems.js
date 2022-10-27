import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import CodeLink from '../../components/CodeLink/CodeLink'
import scificlick3 from '../../util/sound/scifi-sfx-3.mp3'
import scificlick1 from '../../util/sound/scifi-sfx-1.mp3'
import slidingWindow from '../../util/images/patterns/sliding-window.png'
import '../CodeLink/codelink.css'
import {slidingWindowProblems, matrixProblems, twoPointerProblems, fastAndSlowPointerProblems, mergeIntervalsProblems, cyclicSortProblems, linkedlistReversalProblems, treeBfsProblems, treeDfsProblems, twoHeapsProblems, subsetsProblems, modifiedBinarySearchProblems, bitwiseXorProblems, topKElementsProblems, kWayMergeProblems, dynamicProgrammingProblems, topologicalSortGraphProblems} from '../../constants/problems'
import './accordionproblems.css'

const AccordionProblems = () => {

  const onEnterTheVoidClick = () => {
    const clickAudio = new Audio();
    clickAudio.src = scificlick3
    clickAudio.play()
  }

  const onDesignPatternClick = () => {
    const clickAudio = new Audio();
    clickAudio.src = scificlick1
    clickAudio.play()
  }

  return (
    <div className="accordion-container">
      <Accordion>
        
        <div className="enter-the-void-panel">
          <AccordionSummary onClick={onEnterTheVoidClick} className="enter-the-void-panel" id="enter-the-void-panel">
                <p>ENTER THE VOID</p>
          </AccordionSummary>
        </div>

        <Accordion>
        <div className="sliding-window-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="sliding-window-panel" id="sliding-window-panel">
            <p>__Sliding_Window__ 🪟</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {slidingWindowProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>

        <Accordion>
        <div className="islands-matrix-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="islands-matrix-panel" id="islands-matrix-panel">
            <p>I s l a n d s :: Matrix 🏝️</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {matrixProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>


        <Accordion>
        <div className="two-pointer-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="two-pointer-panel" id="two-pointer-panel">
            <p>** Two Pointers ⬆️⬆️</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {twoPointerProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        
        <Accordion>
        <div className="fast-and-slow-pointer-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="fast-and-slow-pointer-panel" id="fast-and-slow-pointer-panel">
            <p> 🏃💨 Fast & 🚶Slow  Pointers </p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {fastAndSlowPointerProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        


        <Accordion>
        <div className="merge-interval-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="merge-intervals-panel" id="merge-intervals-panel">
            <p>Merge Intervals ↪️↩️</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {mergeIntervalsProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        


        <Accordion>
        <div className="cyclic-sort-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="cyclic-sort-panel" id="cyclic-sort-panel">
            <p>Cyclic Sort 🔄</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {cyclicSortProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>



        <Accordion>
        <div className="reversal-ll-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="reversal-ll-panel" id="reversal-ll-panel">
            <p>In-place Reversal of a LinkedList ⏪</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {linkedlistReversalProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        

        <Accordion>
        <div className="bfs-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="bfs-panel" id="bfs-panel">
            <p>Tree Breadth First Search 🌳</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {treeBfsProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        


        <Accordion>
        <div className="dfs-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="dfs-panel" id="dfs-panel">
            <p>Tree Depth First Search 🌲</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {treeDfsProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        
  

        <Accordion>
        <div className="two-heaps-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="two-heaps-panel" id="two-heaps-panel">
            <p>Two Heaps 🌋🌋</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {twoHeapsProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>

        <Accordion>
        <div className="subsets-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="subsets-panel" id="subsets-panel">
            <p>Subsets [🖕] + [🖕🖕] + [🖕🖕🖕]</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {subsetsProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        
        
        <Accordion>
        <div className="modified-binary-search">
          <AccordionSummary onClick={onDesignPatternClick} className="modified-binary-search" id="modified-binary-search">
            <p>Modified Binary Search [🔍]</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {modifiedBinarySearchProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        

        <Accordion>
        <div className="bitwise-xor-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="bitwise-xor-panel" id="bitwise-xor-panel">
            <p>Bitwise XOR 🚨</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {bitwiseXorProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
      


        <Accordion>
        <div className="top-k-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="top-k-panel" id="top-k-panel">
            <p>Top 'K' Elements 🔝</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {topKElementsProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
      

        <Accordion>
        <div className="merge-kway-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="merge-kway-panel" id="merge-kway-panel">
            <p>K-way Merge 🔀🔀▶️</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {kWayMergeProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>
        
        
        <Accordion>
        <div className="knapsack-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="knapsack-panel" id="knapsack-panel">
            <p>0/1 Knapsack (Dynamic Programming) 💰</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {dynamicProgrammingProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>



        <Accordion>
        <div className="topological-sort-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="topological-sort-panel" id="topological-sort-panel">
            <p>Topological Sort (Graph) 📊 </p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {topologicalSortGraphProblems.map(
                (problem) => (
                  <div key={problem.id} className="codelink-box">
                      <CodeLink 
                        name={problem.name} 
                        description={problem.description} 
                        difficulty={problem.difficulty} 
                        solution={problem.solution}>
                      </CodeLink>
                  </div>
                )
              )}
          </AccordionDetails>
          </div>
        </Accordion>

      </Accordion>
    </div>
  )
}

export default AccordionProblems