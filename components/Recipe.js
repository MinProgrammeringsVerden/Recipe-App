import React  from 'react';
import { Link } from 'react-router-dom';



const API_KEY ='my-api-key';

class Recipe extends React.Component {

    state = {
        currentRecipe:[]
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const result = await req.json();
        console.log(result);
        this.setState({currentRecipe :result.recipes[0]});
       
        
        

    }
  
    render() { 


        const actuall = this.state.currentRecipe;
        
        return ( 

            
                <div className="container" style={{marginTop:"5rem"}}>
                        {this.state.currentRecipe.length !== 0 &&
                            <div className="current-recipe">
                                <img className="current-recipe-img" src={actuall.image_url} alt={actuall.title}/>
                                <h3 className="current-recipe-title">{ actuall.title }</h3>
                                <h4 className="current-recipe-publisher">
                                    Publisher: <span>{ actuall.publisher }</span>
                                </h4>
                                <p className="current-recipe-website">
                                    Website: <span><a href={actuall.publisher_url}>{actuall.publisher_url}</a></span>
                                </p>
                                <button className="current-recipe-button">
                                    <Link to= "/">Go Home...</Link>
                                </button>
                    

                            </div>

                        }
                        
                </div>


         );
    }
}
 
export default Recipe ;