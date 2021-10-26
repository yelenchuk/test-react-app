import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({ data, onDelete, onToggleProp, testFunction }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item; // диструктуризация по остаточному принципу
        return (
            <EmployeesListItem
                fromChildToParent={() => { logChildData()}}
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
             />
        )
    })

    const logChildData = (data) => {
        console.log(data);
    }

    return (
        <ul className="app-list list-group">
            {elements}
         </ul>
     )
}

export default EmployeesList;