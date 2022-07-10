import '../styles/Cards.css'

export default function Cards(props){
    return(
        <div className='main-container--grid' >
            <div className='main-container--grid_item'>
                    <img src={props.imagen}></img>
                    <h3>{props.title}</h3>
                    <p>{props.album}</p>
            </div>
        </div>

            
        
    )
}