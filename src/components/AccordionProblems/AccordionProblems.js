import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import CodeLink from '../../components/CodeLink/CodeLink'
import scificlick3 from '../../util/sound/scifi-sfx-3.mp3'
import scificlick1 from '../../util/sound/scifi-sfx-1.mp3'
import slidingWindow from '../../util/images/patterns/sliding-window.png'
import '../CodeLink/codelink.css'
import {problems} from '../../constants/problems'
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
        
        <AccordionSummary onClick={onEnterTheVoidClick} className="enter-the-void-panel" id="enter-the-void-panel">
              <p>ENTER THE VOID</p>
        </AccordionSummary>
        
        <Accordion>
        <div className="sliding-window-panel">
          <AccordionSummary onClick={onDesignPatternClick} className="sliding-window-panel" id="sliding-window-panel">
            <p>Sliding Window</p>
          </AccordionSummary>
        </div>
        <div className="codelink-container">
          <AccordionDetails>
                {problems.map(
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
            <AccordionSummary onClick={onDesignPatternClick} className="islands-matrix-panel" id="islands-matrix-panel">
              <p>Islands: Matrix</p>
            </AccordionSummary>
          </Accordion>

        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} className="two-pointer-panel" id="two-pointer-panel">
            <p>Two Pointers</p>
          </AccordionSummary>
        </Accordion> 
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} className="fast-and-slow-pointer-panel" id="fast-and-slow-pointer-panel">
            <p>Fast & Slow Pointers</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="merge-intervals-panel" id="merge-intervals-panel">
            <p>Merge Intervals</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>  
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="cyclic-sort-panel" id="cyclic-sort-panel">
            <p>Cyclic Sort</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="reversal-ll-panel" id="reversal-ll-panel">
            <p>In-place Reversal of a LinkedList</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>  
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="bfs-panel" id="bfs-panel">
            <p>Tree Breadth First Search</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="dfs-panel" id="dfs-panel">
            <p>Tree Depth First Search</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="two-heaps-panel" id="two-heaps-panel">
            <p>Two Heaps</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="subsets-panel" id="subsets-panel">
            <p>Subsets</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="modified-binary-search" id="modified-binary-search">
            <p>Modified Binary Search</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="bitwise-xor-panel" id="bitwise-xor-panel">
            <p>Bitwise XOR</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="top-k-panel" id="top-k-panel">
            <p>Top 'K' Elements</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="merge-kway-panel" id="merge-kway-panel">
            <p>K-way Merge</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="knapsack-panel" id="knapsack-panel">
            <p>0/1 Knapsack (Dynamic Programming)</p>
          </AccordionSummary>
        </Accordion>  
        
        <Accordion>
          <AccordionSummary onClick={onDesignPatternClick} aria-controls="topological-sort-panel" id="topological-sort-panel">
            <p>Topological Sort (Graph)</p>
          </AccordionSummary>
        </Accordion>

      </Accordion>
    </div>
  )
}

export default AccordionProblems