import * as COLORS from '../constants/constants'

export const difficultyColorCalculator = (difficulty) => {
  switch(difficulty){
    case 'Easy':
      return COLORS.EASY
    case 'Medium':
      return COLORS.MEDIUM
    default:
      return COLORS.HARD
  }
}