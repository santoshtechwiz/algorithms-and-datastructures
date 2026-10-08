# 🚀 TypeScript Algorithms & Data Structures

A comprehensive, high-performance collection of algorithms and data structures implemented in TypeScript. This repository serves as both a learning resource and a reference for implementing efficient data processing logic.

## 📊 Algorithm Roadmap

| Category | Algorithm / Data Structure | Time Complexity | Space Complexity | Implementation |
| :--- | :--- | :---: | :---: | :---: |
| **Sorting** | Bubble Sort | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | [👉](./BubbleSort/Bubble.ts) |
| | Selection Sort | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | [👉](./SelectionSort/SelectionSort.ts) |
| | Insertion Sort | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | [👉](./InsertionSort/InsertionSort.ts) |
| | Merge Sort | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n)$ | [👉](./MergeSort/MergeSort.ts) |
| | Quick Sort | $\mathcal{O}(n \log n)$ | $\mathcal{O}(\log n)$ | [👉](./QuickSort/QuickSort.ts) |
| **Searching** | Binary Search | $\mathcal{O}(\log n)$ | $\mathcal{O}(1)$ | [👉](./BinarySearch/BinarySearch.ts) |
| | Quick Select (Kth Smallest) | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | [👉](./QuickSelect/KthSmallest.ts) |
| **Data Structures** | Binary Search Tree (BST) | $\mathcal{O}(\log n)$ | $\mathcal{O}(n)$ | [👉](./BST/BST.ts) |
| | Linked List | $\mathcal{O}(1)$ | $\mathcal{O}(n)$ | [👉](./LinkedList/LinkedList.ts) |
| | Min Heap | $\mathcal{O}(\log n)$ | $\mathcal{O}(n)$ | [👉](./MinHeap/MinHeap.ts) |
| | Stack | $\mathcal{O}(1)$ | $\mathcal{O}(n)$ | [👉](./Stack/Stack.ts) |
| | Queue | $\mathcal{O}(1)$ | $\mathcal{O}(n)$ | [👉](./Queue/Queue.ts) |
| | Trie | $\mathcal{O}(k)$ | $\mathcal{O}(n \cdot k)$ | [👉](./Trie/Trie.ts) |
| **Mathematics** | Sieve of Eratosthenes | $\mathcal{O}(n \log \log n)$ | $\mathcal{O}(n)$ | [👉](./Primes/Primes.ts) |
| | Prime Factors | $\mathcal{O}(\sqrt{n})$ | $\mathcal{O}(1)$ | [👉](./PrimeFactors/PrimeFactors.ts) |
| **Other** | Array Shuffle (Fisher-Yates) | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | [👉](./ArrayShuffle/ArrayShuffle.ts) |
| | Permutations | $\mathcal{O}(n!)$ | $\mathcal{O}(n)$ | [👉](./Permutations/Permutations.ts) |
| | Matrix Spiral | $\mathcal{O}(n \cdot m)$ | $\mathcal{O}(1)$ | [👉](./MatrixSpiral/MatrixSpiral.ts) |
| | Edit Distance (DP) | $\mathcal{O}(m \cdot n)$ | $\mathcal{O}(m \cdot n)$ | [👉](./EditDistance/EditDistance.ts) |
| | Coin Change (DP) | $\mathcal{O}(n \cdot amount)$ | $\mathcal{O}(amount)$ | [👉](./CoinChange/CoinChange.ts) |

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+)
- TypeScript

### Installation
```bash
git clone https://github.com/santoshtechwiz/algorithms-and-datastructures.git
cd algorithms-and-datastructures
npm install
```

### Running Tests
```bash
npm test
```

## 🎯 Goals for Improvement
- [ ] Implement Graph Algorithms (Dijkstra, A*, Prim's).
- [ ] Add Dynamic Programming patterns.
- [ ] Enhance TypeScript Generics for all Data Structures.
- [ ] Add automated CI testing with GitHub Actions.

---
*If you find this repository useful, please consider giving it a ⭐ to support the project!*
