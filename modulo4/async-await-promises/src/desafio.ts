const message = () => {
    return new Promise (() => {
        setTimeout(() => {
            console.log("oi")
        },5000); 
    })
};

message();