


export const TodoListItem = () => {

    return (
        <li key={t.id}>
            <span className={clsx('todo', {'done': t.done})}>{t.text}</span>
            <MyButton 
                level={4} 
                icon="fa-trash" 
                clickHandler={() => deleteTodo(t)} 
            />
            <MyButton 
                icon={ t.done ? 'fa-times' : 'fa-check'} 
                clickHandler={() => toggleTodo(t)} 
            />
        </li>
    )
}