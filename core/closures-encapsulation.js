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

console.log(makeNuclearButton().totalPeaceTime);
console.log(makeNuclearButton().launch);