import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CodeTabs from "./CodeTabs";

const SnakeGame = () => {
	const [isPaused, setIsPaused] = useState(true);
	const [gameStarted, setGameStarted] = useState(false); // New state variable
	const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
	const [dx, setDx] = useState(10);
	const [dy, setDy] = useState(0);
	const [food, setFood] = useState({ x: 50, y: 50 });
	const [showModal, setShowModal] = useState(false);
	const [lastKey, setLastKey] = useState();
	const [gameOver, setGameOver] = useState(false);
	const [count, setCount] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const resetGame = () => {
		setShowModal(false);
		setGameOver(false);
		setCount(0);
		setSnake([{ x: 10, y: 10 }]);
		setDx(10);
		setDy(0);
		setFood({ x: 50, y: 50 });
		const canvas = document.getElementById("gameCanvas");
		const ctx = canvas.getContext("2d");
		ctx.fillStyle = "green";
		ctx.fillRect(10, 10, 10, 10); // Initial snake part
		ctx.fillStyle = "red";
		ctx.fillRect(50, 50, 10, 10); // Initial food
	};

	const clearCanvas = () => {
		const canvas = document.getElementById("gameCanvas");
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	const handleGameOver = () => {
		setGameOver(true); // Set game over state to true
		setShowModal(true);
		if (count > highScore) {
			setHighScore(count);
			localStorage.setItem("snakeGameHighScore", count);
		}
		clearCanvas();
	};

	useEffect(() => {
		const canvas = document.getElementById("gameCanvas");
		const ctx = canvas.getContext("2d");

		const savedHighScore = localStorage.getItem("snakeGameHighScore");
		if (savedHighScore) {
			setHighScore(parseInt(savedHighScore, 10));
		}

		const drawSnakePart = (snakePart, index) => {
			ctx.fillStyle = index === 0 ? "lightgreen" : "green";
			ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
		};

		const drawSnake = () => {
			snake.forEach((part, index) => drawSnakePart(part, index));
		};
		const drawFood = () => {
			ctx.fillStyle = "red";
			ctx.fillRect(food.x, food.y, 10, 10);
		};

		const gameLoop = () => {
			if (isPaused || !gameStarted || gameOver) return; // Modified condition
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawFood();
			drawSnake();

			const head = { x: snake[0].x + dx, y: snake[0].y + dy };
			const newSnake = [head, ...snake.slice(0, -1)];
			// Check if the snake collides with itself
			for (let i = 1; i < newSnake.length; i++) {
				if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
					clearInterval(gameInterval);
					handleGameOver();
					return;
				}
			}

			if (head.x === food.x && head.y === food.y) {
				const newFood = {
					x: Math.floor(Math.random() * 30) * 10,
					y: Math.floor(Math.random() * 30) * 10,
				};
				setFood(newFood);
				setCount(count + 1);
				newSnake.push(snake[snake.length - 1]);
			}

			setSnake(newSnake);

			if (
				head.x < 0 ||
				head.y < 0 ||
				head.x >= canvas.width ||
				head.y >= canvas.height
			) {
				clearInterval(gameInterval);
				handleGameOver();
			}
		};

		// Initial draw
		drawSnake();
		drawFood();

		const gameInterval = setInterval(gameLoop, 100);

		return () => clearInterval(gameInterval); // Cleanup
	}, [snake, dx, dy, food, gameStarted]);

	useEffect(() => {
		// Initialize lastKey variable
		const handleKeyDown = (event) => {
			event.preventDefault(); // Prevent scrolling
			const oppositeDirections = {
				ArrowUp: "ArrowDown",
				ArrowDown: "ArrowUp",
				ArrowLeft: "ArrowRight",
				ArrowRight: "ArrowLeft",
			};

			if (event.key === oppositeDirections[lastKey]) {
				return; // Prevent moving back onto itself
			}
			switch (event.key) {
				case "ArrowUp":
					setDx(0);
					setDy(-10);
					break;
				case "ArrowDown":
					setDx(0);
					setDy(10);
					break;
				case "ArrowLeft":
					setDx(-10);
					setDy(0);
					break;
				case "ArrowRight":
					setDx(10);
					setDy(0);
					break;
			}
			setLastKey(event.key);
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	});

	const handlePlayPause = () => {
		setIsPaused(!isPaused);
		if (!gameStarted) {
			setGameStarted(true);
		}
	};
	const closeAndReset = () => {
		clearCanvas();
		resetGame();
		setIsPaused(true);
		setGameStarted(false);
	};

	return (
		<div className='container'>
			<div className='row mb-2'>
				<div className='col'></div>
			</div>
			<div className='row mb-2'>
				<div className='col-sm-5'>
					<Button variant='primary' className='mb-2' onClick={handlePlayPause}>
						{isPaused ? "Start Game!" : "Pause"}
					</Button>
					<br />
					<canvas
						id='gameCanvas'
						width='300'
						height='300'
						className='border'
					></canvas>
				</div>
				<div className='col-sm-7'>
					<h5>Let's Play Snake!</h5>
					<p>No hitting the walls, no touching yourself.</p>
					<p>Score: {count}</p>
					<p>Highest Score: {highScore} </p>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<CodeTabs />
				</div>
			</div>
			<Modal show={showModal} onHide={closeAndReset}>
				<Modal.Header closeButton>
					<Modal.Title>Game Over</Modal.Title>
				</Modal.Header>
				<Modal.Body>Would you like to play again?</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeAndReset}>
						No
					</Button>
					<Button variant='primary' onClick={resetGame}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default SnakeGame;
