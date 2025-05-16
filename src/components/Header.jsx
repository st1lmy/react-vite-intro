import logo from '/vite.svg'

export default function Header() {
const now = new Date();

    return (
      <header>
        <img src={logo} alt="Gumyr" />
        
        <span>Время сейчас: {now.toLocaleTimeString()}</span>
      </header>
    );
}