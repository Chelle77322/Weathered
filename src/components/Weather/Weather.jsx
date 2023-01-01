import React,{ Component} from 'react';
import Search from '../Search/Search.jsx';
import api from '../../utils/api.js';


class Weather extends Component {
    state = {
        search: "",
        results: []
    };
//When the page loads
componentDidMount() {
    console.log("Components have mounted");
    this.searchCity("");
}
searchCity = query => {
    api.search(query).then(result => this.setState({results:result.data.items})).then(console.log(this.state.results)).catch(error => console.log(error));
}

handleformsubmit = event => {
    event.preventDefault();
    this.SearchNovels(this.state.search);
}
render () {
    return(
        <div>
           
                <Search/>
            
          
        </div>
    )
}
}
export default Weather;