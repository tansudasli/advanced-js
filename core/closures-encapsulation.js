//remember function is an object !!

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;

    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;

    setInterval(passTime, 1000); //every seconds, tik tak

    const launch = () => {
        timeWithoutDestruction = 0;

        return '💥';
    };

    //below lines are public outside of fn.
    return {
        launch: launch(),
        totalPeaceTime: totalPeaceTime()
    }

};

const ohno = makeNuclearButton(); //assign a function to a variable. so you can call it efficiently!

console.log(ohno.totalPeaceTime);
console.log(ohno.launch);