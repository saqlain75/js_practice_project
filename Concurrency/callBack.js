function doFlexibleFunction(callBack){
    callBack();
}
const funstion1 = ()=> console.log("Hello from function 1")
const funstion2 = ()=> console.log("Hello from function 2")

doFlexibleFunction(funstion1)
doFlexibleFunction(funstion2)