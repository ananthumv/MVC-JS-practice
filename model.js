class Model {
    constructor() {
        this.seats = [false,false,false,true,false,false,false,false,false,true,]
    }

    getSeats () {
        return this.seats;
    }

    bookSeat(i) {

        console.log(this.seats[i])

        if (this.seats[i] === false) {
            this.seats[i] = true
            console.log("booked")

        }else {
            this.seats[i] = false
            console.log(this.seats)

        }
    }
    
}

export default Model;
