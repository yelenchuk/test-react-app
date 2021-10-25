import { Component } from 'react';

import './employees-add-form.css'


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
          salary: '' 
        }
    }

    onValueChange = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary && this.state.name.length > 2 && this.state.salary.length > 2 ) {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })
        }
    }


    render() {
        const { name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавте нового сотрудника</h3>
                <form className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зоут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button type="submit"
                        className="btn btn-outline-light"> Добавить </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;