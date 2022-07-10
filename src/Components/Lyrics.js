import "../styles/Lyrics.css"

export default function Lyrics(props){
    return(
        <div className="container-lyrics">
            <h2 className="title">{props.title}</h2>
            <p className="lyrics">{props.lyrics}</p>

        </div>
    )
}