import maxSumSubArrayImage from '../util/images/code/maxSumSubArray.png'

export const slidingWindowProblems = [
  {
    id: 1,
    name: "Max Sum SubArray",
    description: "Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },
  {
    id: 2,
    name: "Smallest Subarray with a Greater Sum",
    description: "Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },
  {
    id: 3,
    name: "Longest Substring with K Distinct Characters ",
    description: "Given a string, find the length of the longest substring in it with no more than K distinct characters. You can assume that K is less than or equal to the length of the given string.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },
  {
    id: 4,
    name: "Fruits into Baskets ",
    description: "You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets. You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions: Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold. You can start with any tree, but you can’t skip a tree once you have started. You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type. Write a function to return the maximum number of fruits in both baskets.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },
  {
    id: 5,
    name: "Longest Substring with Distinct Characters ",
    description: "Given a string, find the length of the longest substring, which has all distinct characters.",
    difficulty: "Hard",
    solution: maxSumSubArrayImage
  },
  {
    id: 6,
    name: "Longest Substring with Same Letters after Replacement",
    description: "Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.",
    difficulty: "Hard",
    solution: maxSumSubArrayImage
  },{
    id: 7,
    name: "Longest Subarray with Ones after Replacement ",
    description: "Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.",
    difficulty: "Hard",
    solution: maxSumSubArrayImage
  }
]

export const matrixProblems = [
  {
    id: 1,
    name: "Number of Islands",
    description: "Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), count the number of islands in it. An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },{
    id: 2,
    name: "Biggest Islands",
    description: "Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), find the biggest island in it. Write a function to return the area of the biggest island.  An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },{
    id: 3,
    name: "Flood Fill",
    description: "Any image can be represented by a 2D integer array (i.e., a matrix) where each cell represents the pixel value of the image. Flood fill algorithm takes a starting cell (i.e., a pixel) and a color. The given color is applied to all horizontally and vertically connected cells with the same color as that of the starting cell. Recursively, the algorithm fills cells with the new color until it encounters a cell with a different color than the starting cell. Given a matrix, a starting cell, and a color, flood fill the matrix.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },{
    id: 4,
    name: "Number of Closed Islands",
    description: "You are given a 2D matrix containing only 1s (land) and 0s (water). An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally). A closed island is an island that is totally surrounded by 0s (i.e., water). This means all horizontally and vertically connected cells of a closed island are water. This also means that, by definition, a closed island can't touch an edge (as then the edge cells are not connected to any water cell). Write a function to find the number of closed islands in the given matrix.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  }
]

export const twoPointerProblems = [
  {
    id: 1,
    name: "Pair with Target Sum",
    description: "Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target. Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },{
    id: 2,
    name: "Separate Duplicates",
    description: "Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution have a space complexity of O(1).Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },
  {
    id: 3,
    name: "Squaring a Sorted Array",
    description: "Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },
  {
      id: 4,
      name: "Triplet Sum to Zero",
      description: "Given an array of unsorted numbers, find all unique triplets in it that add up to zero.",
      difficulty: "Medium",
      solution: maxSumSubArrayImage
  },
  {
    id: 5,
    name: "Triplet Sum Close to Target",
    description: "Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 6,
    name: "Triplets With Smaller Sum",
    description: "Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 7,
    name: "Subarrays with Product Less than a Target",
    description: "Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 8,
    name: "Dutch National Flag Problem",
    description: "Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array. The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  }
]

export const fastAndSlowPointerProblems = [
  {
    id: 1,
    name: "LinkedList Cycle",
    description: "Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },{
    id: 2,
    name: "Start of a LinkedList Cycle",
    description: "Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 3,
    name: "Happy Number",
    description: "Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 4,
    name: "Middle of a LinkedList",
    description: "Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList. If the total number of nodes in the LinkedList is even, return the second middle node.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  }
]

export const mergeIntervalsProblems = [
  {
    id: 1,
    name: "Merge Intervals",
    description: "Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 2,
    name: "Insert Interval",
    description: "Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 3,
    name: "Intervals Intersection",
    description: "Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },{
    id: 4,
    name: "Conflicting Appointments",
    description: "Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  }
]

export const cyclicSortProblems = [
  {
    id: 1,
    name: "Cyclic Sort",
    description: "We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4. Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },  {
    id: 2,
    name: "Find the Missing Number",
    description: "We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },  {
    id: 3,
    name: "Find all Missing Numbers",
    description: "We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },  {
    id: 4,
    name: "Find the Duplicate Number",
    description: "We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },  {
    id: 5,
    name: "Find all Duplicate Numbers",
    description: "We are given an unsorted array containing n numbers taken from the range 1 to n. The array has some numbers appearing twice, find all these duplicate numbers using constant space.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  }
]

export const linkedlistReversalProblems = [
  {
    id: 1,
    name: "Reverse a LinkedList",
    description: "Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.",
    difficulty: "Easy",
    solution: maxSumSubArrayImage
  },  {
    id: 2,
    name: "Reverse a Sub-list",
    description: "Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  },  {
    id: 3,
    name: "Reverse every K-element Sub-list",
    description: "Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head. If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.",
    difficulty: "Medium",
    solution: maxSumSubArrayImage
  }
]

export const treeBfsProblems = [
  {

  },{

  }
]

export const treeDfsProblems = [
  {

  },{

  }
]

export const twoHeapsProblems = [
  {

  },{

  }
]

export const subsetsProblems = [
  {

  },{

  }
]

export const modifiedBinarySearchProblems = [
  {

  },{

  }
]

export const bitwiseXorProblems = [
  {

  },{

  }
]

export const topKElementsProblems = [
  {

  },{

  }
]

export const kWayMergeProblems = [
  {

  },{

  }
]

export const dynamicProgrammingProblems = [
  {

  },{

  }
]

export const topologicalSortGraphProblems = [
  {

  },{

  }
]