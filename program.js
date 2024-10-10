// factory function
function createCircle(radius){
    return {radius,
    draw: function(){
console.log('hellow world')
    }
};

}

const cir = createCircle(1);
// console.log(cir);

// Constructor

function Circle(radius){
    this.radius=radius;
    this.draw= function(){
        console.log('contructor');
    };

}

const contructor= new Circle(1);
console.log(contructor)