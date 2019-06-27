
let called = 0;
const initialize = () =>  {
    let view;

    const getView = () => {
        if (called > 0)
            return view;
        else {
            called++;
            console.log('initialized');

            return view = '💥';
        }

    };

    return {
        view: getView()
    }
};

const v = initialize();
const v2 = initialize(); //only 1 times initialized


console.log(v.view);

// eliminate many times initialization