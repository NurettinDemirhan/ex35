const repeatHello = (callback) => {
    setInterval(callback,1000)
}
const sayHello = () => console.log("hello")

repeatHello(sayHello)
