import React from "react";
import Card from "./components/Card";
import { makeStyles } from "@material-ui/core/styles";
import BubbleSortImg from "./../images/Algo Pics/BubbleSort.png";
import QuickSortImg from "./../images/Algo Pics/QuickSort.png";
import MergSortImg from "./../images/Algo Pics/MergeSort.png";
import LinkedListImg from "./../images/Algo Pics/LinkedList.png";
import DfsImg from "./../images/Algo Pics/Dfs.png";
import DijkstraImg from "./../images/Algo Pics/Dijkstra.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  MainDiv: {
    background: "#fff",
    minHeight: "100vh",
    width: "100%",
    padding: theme.spacing(2),
  },

  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(3),
	alignItems: "stretch",
  },

  cardLink: {
    textDecoration: "none",
  },

  card: {
    flex: "1 1 calc(33.33% - 16px)", // Three cards per row by default
    maxWidth: "calc(33.33% - 16px)",
	height: "400px", // Set a fixed height for all cards
    overflow: "hidden", // Hide overflowing text
    whiteSpace: "nowrap", // Prevent text wrapping
    textOverflow: "ellipsis", // Show ellipsis for overflowing text
    [theme.breakpoints.down('md')]: {
      flex: "1 1 calc(50% - 16px)", // Two cards per row on medium screens
      maxWidth: "calc(50% - 16px)",
    },
    [theme.breakpoints.down('sm')]: {
      flex: "1 1 calc(100% - 16px)", // One card per row on small screens
      maxWidth: "calc(100% - 16px)",
    },
  },
}));

function Home() {
  const classes = useStyles();
  const { MainDiv, cards, cardLink, card } = classes;
  const numOfCard = [
    [
      {
        title: "Bubble Sort",
        imgSrc: BubbleSortImg,
        url: "/bubblesort",
        desc: "Bubble Sort is the simplest sorting algorithm. This algorithm is slow. It compares between two elements, larger element among those comparable elements swap with the small element and placed in right. It used loop that's why its time complexity is high.",
      },
      {
        title: "Quick Sort",
        imgSrc: QuickSortImg,
        url: "/quicksort",
        desc: "Quick Sort, a divide-and-conquer algorithm, efficiently sorts elements. It recursively partitions the array, placing elements in their correct positions. Despite not guaranteeing the fastest sorting, its average-case time complexity is superior to many alternatives.",
      },
      {
        title: "Merge Sort",
        imgSrc: MergSortImg,
        url: "/mergeSort",
        desc: "Merge Sort is a stable, comparison-based sorting algorithm. It divides the array into smaller segments recursively until each is trivially sorted, then merges them into a single sorted array. With a time complexity of O(n log n), it's efficient for large datasets.",
      },
      {
        title: "Singly Linked List",
        imgSrc: LinkedListImg,
        url: "/singlylinklist",
        desc: "A Singly Linked List is a linear data structure where each element, called a node, contains data and a reference to the next node. It allows sequential access and efficient insertion/deletion at the beginning, but traversal is required for random access.",
      },
      {
        title: "DFS",
        imgSrc: DfsImg,
        url: "/dfs",
        desc: "Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It employs a stack to keep track of nodes, making it useful for topological sorting, and pathfinding in unweighted graphs.",
      },
      {
        title: "Dijkstra",
        imgSrc: DijkstraImg,
        url: "/dijkstra",
        desc: "Dijkstra's algorithm is a greedy method used to find the shortest path in a weighted graph. It employs a priority queue to iteratively select vertices with the smallest distance from the source, updating distances to adjacent vertices until all are visited.",
      },
    ],
  ];

  return (
    <div className={MainDiv}>
      {numOfCard.map((e, i) => (
        <div key={`cards-${i}`} className={cards}>
          {e.map((e1, j) => (
            <Link key={`link-${i}-${j}`} to={e1.url} className={cardLink}>
              <Card
                key={`card-${i}-${j}`}
                img={e1.imgSrc}
                title={e1.title}
                author="abc"
                description={e1.desc}
                className={card}
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
