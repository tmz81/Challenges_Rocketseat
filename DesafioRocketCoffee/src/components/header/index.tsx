import { Header } from "./style";
import Logo from "../../assets/Logo.svg";

export function HeaderMenu() {
  return (
    <Header>
      <div>
        <img src={Logo} className="reactLogo" alt="React logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Recompensas
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Gift Cards
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Lojas
            </a>
          </li>
        </ul>
      </nav>
      <button>PEGAR MEU CAFÉ</button>
    </Header>
  );
}
