import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="listItem">
      <p>{title}</p>
      <button type="button" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
