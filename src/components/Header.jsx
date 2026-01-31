import trollFace from '../assets/troll-face.png'

export default function Header() {
    return(
        <header className="header">
            <img src={trollFace} alt="Troll Face" 
            />
            <h1>Zubi Memerator</h1>
        </header>
    )
}
