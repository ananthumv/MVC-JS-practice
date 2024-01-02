import Model from './model.js'

class Controller {
    constructor() {
        this.model = new Model();
    }

    getSeats() {
        return this.model.getSeats();
    }

    bookSeat(i){
        this.model.bookSeat(i)
    }

}

export default Controller;
