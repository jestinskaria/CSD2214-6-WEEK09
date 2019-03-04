// Your code here!

var addNumbers = {
    startNumber: 1109,
    endNumber: 119,
    sum: 0,
    adder: function () {

        for (i = this.startNumber; i >= this.endNumber;) {
            this.sum = this.sum + i;
            i = i - 11;

        }
        console.log(this.sum);
        return this.sum;

    }

};