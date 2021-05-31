import React, {useRef} from 'react';
import '../../App.css';
import { Button } from '../Button';
import Cards from '../Cards';
import { Link } from 'react-router-dom';


function Home() {

const cards = useRef(null);


const scrollToCards = () =>
  window.scrollTo({
    top: cards.current.offsetTop - 80,
    behavior: "smooth",
  });
  return (
    <>
      <div className='hero-container'>
        <video src='/videos/mbitwintermov1.webm' autoPlay loop muted />
        <h1>Samuel Björkqvist</h1>
        <p>Junior Full Stack Utvecklare från Hisingen.</p>
        <div className='hero-btns'>
          <Link to="/projects">
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              PROJEKT
            </Button>

          </Link>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={scrollToCards}>
            MER INFO <i className='fas fa-long-arrow-alt-right' />
          </Button>
        </div>
      </div>
      <div ref={cards}></div>
        <Cards />
    </>
  );
}


export default Home;
