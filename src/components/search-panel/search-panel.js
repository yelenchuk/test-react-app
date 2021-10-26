import { Component } from 'react';
import './search-panel.css';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
             term: ''
         }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term }); //  установка локального состояния, которое выше в this.state
        this.props.onUpdateSearchChild(term); //когда установили лок.состояние,пробрасываем его на верх через метод, который пришел через props
    }

    render() {
        return (
            <input type="text"
                className="form-control seearch-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
   }
}

export default SearchPanel;