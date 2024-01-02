import Controller from './controller.js';

const controller = new Controller();

function render () {

    const seats = controller.getSeats()

    const rootDiv = document.getElementById('root')
    rootDiv.innerHTML = '';

    for (let i = 0; i <seats.length; i++) {
    
        const newSeat = document.createElement('div')
        newSeat.classList.add('seat')
        newSeat.dataset.seatNumber = i;
    
        if (seats[i] === true) {
            newSeat.classList.add('booked')   
        }
        newSeat.addEventListener('click' , (event) => {
            controller.bookSeat(i)
            render()
        })
        rootDiv.appendChild(newSeat)
    }
}

render()
