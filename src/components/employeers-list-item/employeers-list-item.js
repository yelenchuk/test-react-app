import { Component } from 'react';
import './employeers-list-item.css';

class EmployeersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false,
        }
    }

    onIcrease = () => {
        this.setState(({ increase }) => ({ // в аргументах идет деструктуризация
            increase: !increase // callback помогает нам четко отталкиваться от предыдушего зн-ния
        }))
    }

    favoriteWorker = () => {
        this.setState(({ star }) => ({
            star: !star
        }))

    }

    render() {
        const { name, salary } = this.props;
        const { increase, star } = this.state; // increase приходит не из props, а из state

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }

        if (star) {
            classNames += ' like';
        }


        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                    onClick={this.favoriteWorker}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex justify-content-center aligh-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={this.onIcrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeersListItem;