import React from 'react'

function TodoListApp() {
  return (
  	<>
			<h1>HyeonDo List</h1>
			<form action="">
				<input type="text" name="" id="" />
				<button type="submit">Add</button>
			</form>
			<ul>
				<li>
					<input type="checkbox" id="chk-1" />
					<label htmlFor="chk-1">지각하기</label>
					<button type="button">✏️</button>
					<button type="button">❌</button>
				</li>				
				<li>
					<input type="checkbox" id="" />
					<label htmlFor="">롤체 in dawn</label>
					<button type="button">✏️</button>
					<button type="button">❌</button>
				</li>
			</ul>
    </>
	)
}

export default TodoListApp