import React, { useState } from "react";
import { AddTask } from "./addtask";

export function Home() {
	const [newUser, setNewUser] = useState("");
	const [listItems, setListItems] = useState([]);
	const [newItem, setNewItem] = useState({});

	const handleDelete = itemToDelete => {
		const newList = listItems.filter((newItem, index) => {
			return newItem != itemToDelete;
		});
		setListItems(newList);
	};

	const baseUrl = "https://assets.breatheco.de/apis/fake/todos";

	const createUser = async username => {
		const response = await fetch(`${baseUrl}/user/${username}`, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		});
		// const user = await response.json();
		alert(username + " created");
	};

	const updateList = async username => {
		const response = await fetch(`${baseUrl}/user/${newUser}`, {
			method: "PUT",
			body: JSON.stringify([
				{ label: "Make the bed", done: false },
				{ label: "Walk the dog", done: false },
				{ label: "Do the replits", done: false }
			]),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const updatedUserList = await response.json();
		alert(updatedUserList.result);
	};

	const getList = async username => {
		const result = await fetch(`${baseUrl}/user/${newUser}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const taskList = await result.json();
		setListItems(taskList);
	};

	return (
		<div className="form-group my-5 mx-5 text-center">
			<h1 className="my-5">Create New User</h1>
			<input
				className="form-control form control-lg"
				type="text"
				onChange={event => {
					setNewUser(event.target.value);
				}}
				value={newUser}
				placeholder="Enter user Name"
			/>
			<br />
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => {
					createUser(newUser);
					setNewItem({});
				}}>
				{"Create New User"}
			</button>
			<button
				type="button"
				className="btn btn-primary"
				onClick={updateList}>
				{"Update Tasks for User"}
			</button>
			<button type="button" className="btn btn-primary" onClick={getList}>
				{"Get Tasks for User"}
			</button>
			<div className="text-center mt-5">
				<ul className="list-group">
					<h2>Tasks for {newUser}</h2>
					{listItems.map((newItem, index) => {
						return (
							<li
								className="list-group-item"
								key={index}
								onClick={event => handleDelete(newItem)}>
								{newItem.label}
							</li>
						);
					})}
				</ul>
				<AddTask />
				<label
					className={`text-success font-weight-bold ${
						listItems.length > 0 ? "text-danger" : ""
					}`}
					htmlFor="taskleft">
					{listItems.length} items left
				</label>
			</div>
		</div>
	);
}
