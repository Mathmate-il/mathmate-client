import './Footer.style.scss';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="heading-primary">MathMate</h2>
      <ul>
        <img src={linkedin} className="icon" alt="linkedin" />
        <a href="https://github.com/Mathmate-il">
          <img src={github} className="icon" alt="github" />
        </a>
      </ul>
    </footer>
  );
}
