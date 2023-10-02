import React, { useState, useEffect } from "react";
import hljs from "highlight.js";

const CodeTabs = () => {
	const [activeTab, setActiveTab] = useState("React");

	const reactCode = `
    const SnakeGame = () => {
        const [isPaused, setIsPaused] = useState(true);
        const [gameStarted, setGameStarted] = useState(false); // New state variable
        const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
        const [dx, setDx] = useState(10);
        const [dy, setDy] = useState(0);
        const [food, setFood] = useState({ x: 50, y: 50 });
        const [showModal, setShowModal] = useState(false);
        
        const resetGame = () => {
            setShowModal(false);
            setSnake([{ x: 10, y: 10 }]);
            setDx(10);
            setDy(0);
            setFood({ x: 50, y: 50 });
        };
    
        const handleGameOver = () => {
            setShowModal(true);
        };
    
        useEffect(() => {
            const canvas = document.getElementById("gameCanvas");
            const ctx = canvas.getContext("2d");
    
            const drawSnakePart = (snakePart) => {
                ctx.fillStyle = "green";
                ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
            };
    
            const drawSnake = () => {
                snake.forEach(drawSnakePart);
            };
    
            const drawFood = () => {
                ctx.fillStyle = "red";
                ctx.fillRect(food.x, food.y, 10, 10);
            };
    
            const gameLoop = () => {
                if (isPaused || !gameStarted) return; // Modified condition
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawFood();
                drawSnake();
    
                const head = { x: snake[0].x + dx, y: snake[0].y + dy };
                const newSnake = [head, ...snake.slice(0, -1)];
    
                if (head.x === food.x && head.y === food.y) {
                    const newFood = {
                        x: Math.floor(Math.random() * 30) * 10,
                        y: Math.floor(Math.random() * 30) * 10,
                    };
                    setFood(newFood);
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
            const handleKeyDown = (event) => {
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
            resetGame();
            setIsPaused(true);
            setGameStarted(false);
        };
    
        return (
            <>
                        <canvas
                            id="gameCanvas"
                            width="500"
                            height="500"
                            className="border"
                        ></canvas>
                </div>
                <Modal show={showModal} onHide={closeAndReset}>
                    <Modal.Header closeButton>
                        <Modal.Title>Game Over</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Would you like to play again?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeAndReset}>
                            No
                        </Button>
                        <Button variant="primary" onClick={resetGame}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    };
    
    export default SnakeGame;`;
	const jsCode = `(function () {
        document.getElementById("up").addEventListener("click", function () {
            dx = 0;
            dy = -10;
        });

        document.getElementById("down").addEventListener("click", function () {
            dx = 0;
            dy = 10;
        });

        document.getElementById("left").addEventListener("click", function () {
            dx = -10;
            dy = 0;
        });

        document.getElementById("right").addEventListener("click", function () {
            dx = 10;
            dy = 0;
        });

        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                case "ArrowUp":
                    dx = 0;
                    dy = -10;
                    break;
                case "ArrowDown":
                    dx = 0;
                    dy = 10;
                    break;
                case "ArrowLeft":
                    dx = -10;
                    dy = 0;
                    break;
                case "ArrowRight":
                    dx = 10;
                    dy = 0;
                    break;
            }
        });
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        let snake = [{ x: 10, y: 10 }];
        let dx = 10;
        let dy = 0;
        let food = {};

        function drawSnakePart(snakePart) {
            ctx.fillStyle = "green";
            ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        }

        function drawSnake() {
            snake.forEach(drawSnakePart);
        }

        function randomFood() {
            food.x = Math.floor(Math.random() * 30) * 10;
            food.y = Math.floor(Math.random() * 30) * 10;
        }

        function drawFood() {
            ctx.fillStyle = "red";
            ctx.fillRect(food.x, food.y, 10, 10);
        }

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFood();
            drawSnake();

            const head = { x: snake[0].x + dx, y: snake[0].y + dy };
            snake.unshift(head);

            if (head.x === food.x && head.y === food.y) {
                randomFood();
            } else {
                snake.pop();
            }

            if (
                head.x < 0 ||
                head.y < 0 ||
                head.x >= canvas.width ||
                head.y >= canvas.height
            ) {
                clearInterval(gameInterval);
                alert("Game Over");
            }
        }

        randomFood();
        const gameInterval = setInterval(gameLoop, 100);
    })();`;
	useEffect(() => {
		document.querySelectorAll("pre code").forEach((block) => {
			hljs.highlightBlock(block);
		});
	}, [activeTab]);

	return (
		<div className="container">
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a
						className={`nav-link ${activeTab === "React" ? "active" : ""}`}
						onClick={() => setActiveTab("React")}
					>
						React
					</a>
				</li>
				<li className="nav-item">
					<a
						className={`nav-link ${activeTab === "JavaScript" ? "active" : ""}`}
						onClick={() => setActiveTab("JavaScript")}
					>
						JavaScript
					</a>
				</li>
			</ul>
			<div className="tab-content">
				<div className={`tab-pane ${activeTab === "React" ? "active" : ""}`}>
					<pre>
						<code className="language-javascript">{reactCode}</code>
					</pre>
				</div>
				<div
					className={`tab-pane ${activeTab === "JavaScript" ? "active" : ""}`}
				>
					<pre>
						<code className="language-javascript">{jsCode}</code>
					</pre>
				</div>
			</div>
		</div>
	);
};

export default CodeTabs;
