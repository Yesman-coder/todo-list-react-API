import React, { useState } from "react";
import { Card } from "./card";

export function Home() {
	const [listItems, setListItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	return (
		<div className="text-center mt-5">
			<h1>To-Dos</h1>
			<input
				type="text"
				onChange={event => {
					setNewItem(event.target.value);
				}}
				value={newItem}
				placeholder="Agregar Nueva Tarea"
			/>
			<button
				className="btn btn-dark"
				onClick={e => {
					if (newItem != "") {
						let item = {
							newItem: newItem
						};
						let tasks = [];
						for (let task of listItems) {
							tasks.push(task);
						}
						tasks.push(item);
						setListItems(tasks);
						setNewItem("");
					} else {
						alert("Por favor agregue Nueva Tarea");
					}
				}}>
				{"Agregar"}
			</button>
			<ul>
				<li style={{ listStyleType: "none" }}>
					{" "}
					{listItems.map((item, index) => {
						return <Card key={index} name={item.newItem} />;
					})}
				</li>
			</ul>
			<label htmlFor="taskleft">
				You have {listItems.length} tasks to do
			</label>
		</div>
	);
}
