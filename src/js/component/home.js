import React, { useState } from "react";

//create your first component
export function Home() {
	const [currentTodo, setCurrentTodo] = useState(""); //declaring the variables for my useState
	const [list, setList] = useState([
		{ label: "Become 4Geeks code Jedi", done: false },
		{ label: "Read more about React", done: true },
		{ label: "Buy more coffee", done: false },
		{ label: "Get a new job", done: false },
		{ label: "Buy a new desktop", done: false }
	]);

	const handleKeyPress = e => {
		if (e.key === "Enter") {
			setList(list.concat({ label: currentTodo, done: false }));
			setCurrentTodo("");
		}
	};

	const deleteTodo = index => setList(list.filter((item, i) => i !== index)); //deleting task by the filter and the id

	const handleCompleteTodo = index => {
		let newList = [].concat(list);
		newList[index].done = !newList[index].done;

		setList(newList);
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center wrap">
			<h1 className="mb-4">My To-Do tracking</h1>
			<div className="todo-container">
				<ul className="list-group">
					<li className="list-group-item">
						{}
						<input
							className="form-control border-0"
							type="text"
							placeholder="Something else to do?"
							aria-label="add todo"
							value={currentTodo}
							onChange={e => setCurrentTodo(e.target.value)} //event to add the task
							onKeyPress={e => handleKeyPress(e)}
						/>
					</li>
					{list.map((item, index) => (
						<li className="list-group-item" key={index}>
							<div
								className={
									item.done
										? "status border rounded-circle d-inline-block done mr-3"
										: "status border rounded-circle d-inline-block mr-3"
								}
								onClick={() => handleCompleteTodo(index)}>
								{" "}
							</div>
							{item.label}
							<span
								className="delete ml-auto"
								onClick={() => deleteTodo(index)}>
								&#10007;
							</span>
						</li>
					))}
				</ul>
				<div className="list-group-item footer">
					{list.length > 0
						? `${list.length} item${
								list.length > 1 ? "s" : ""
						  } left`
						: "All Done Congratulations! Keep it Up!"}
				</div>
			</div>
		</div>
	);
}
