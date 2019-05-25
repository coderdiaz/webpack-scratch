import example from './example'
import './style.scss'
import background from './background.png';

const image = new Image();
image.src = background;

document.body.appendChild(image);

 example()