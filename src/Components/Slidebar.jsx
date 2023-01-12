import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2387027.jpg"
          alt="First slide"
          width="100%"
          height="620px"
        />
        <Carousel.Caption>
          <h3>Money Hiest</h3>
          <p>A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1695677.jpg"
          alt="Second slide"
          width="100%"
          height="620px"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>Matt Murdock manages to overcome the challenges that he faces due to him being blind since childhood and fights criminals as a lawyer and Daredevil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2311857.jpg"
          alt="Third slide"
          width="100%"
          height="620px"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
          John and Mary find themselves in the middle of an epic romance while the town unfolds a supernatural truth hiding behind the veil of the infamous period in American history.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2668534.jpg"
          alt="First slide"
          width="100%"
          height="620px"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;