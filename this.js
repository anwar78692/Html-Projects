let obj;

obj = {
    'name': 'anwar',
    'age': 22,
    sayHii: function() {
        console.log("Hello from inside function");
        console.log(this);

        function inside() {
            console.log("Inside inside function");
            console.log(this);
        }
        let newFun = inside.bind(obj);
        newFun();


        // arrow function

        inside = () => {
            console.log("Inside inside function");
            console.log(this);
        }
        inside();
    },
};

fun = () => console.log(this)
fun();