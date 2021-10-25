import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({ data, onDelete, onToggelIncrease, onToggleRise }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item; // диструктуризация по остаточному принципу
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggelIncrease={() => onToggelIncrease(id) }
                onToggleRise={() => onToggleRise(id)}
             />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
         </ul>
     )
}

export default EmployeesList;