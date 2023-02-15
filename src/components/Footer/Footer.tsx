import './Footer.scss';
import LinkedinIcon from '@/assets/linkedin.svg';
import GithubIcon from '@/assets/github.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="mathMate">MathMate</h2>
      <span className='iconsContainer'>
        <img src={LinkedinIcon} className="icon" alt="linkedin" />
        <a
          href="https://github.com/Mathmate-il"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubIcon} className="icon" alt="github" />
        </a>
      </span>
    </footer>
  );
}
