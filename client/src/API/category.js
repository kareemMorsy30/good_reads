import axios from 'axios';
import {addCategory} from '../actions/admin/category';

export function addNewCategory (props, category){
    if (!category.error) {
        console.log(category);
        axios.post('http://localhost:5000/categories/', {name: category.name, withCredentials: true}).then(response => {
            if (response) {
                console.log(response);
                // props.dispatch(addCategory(category));
                getAllCategory(props);
            }
        }).catch(error => {
            console.log(error);   
        });
    }
}

export function getAllCategory(props){
    axios.get('http://localhost:5000/categories/', {withCredentials: true})
        .then(response => {
            console.log(response.data)
            const categories = response.data;
            categories.map(category => props.dispatch(addCategory(category)));
        })
        .catch(error => {
            console.log(error)
        })
}