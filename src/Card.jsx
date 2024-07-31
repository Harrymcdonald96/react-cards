import profilepic from './assets/signup.png'

function Card(){
    return (
        <div className="card">
            <img className="card-image"src={profilepic} alt="trainerimage"></img>
            <h2 className="card-title">Personal Training</h2>
            <p className='card-text'> one to one sessions </p>
        </div>
    )
}

export default Card;