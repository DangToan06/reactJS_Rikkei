"use strict";
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const logMoverment = (direction) => {
    return `🔄 Moving ${direction}`;
};
const setMode = (systemMode) => {
    return `⚙️ System set to AUTO mode ${systemMode}`;
};
const processInput = (input) => {
    if (typeof input === "string") {
        console.log(`input length: ${input.length}`);
    }
    else {
        console.log(`input: ${input}`);
    }
};
const validdateInput = (input) => {
    if (typeof input === "number") {
        console.log(`📥 Received input (any): ${input}`);
    }
    else {
        console.log(`❌ Invalid input type`);
    }
};
const crash = (message) => {
    throw new Error(message);
};
logMoverment("left");
logMoverment("right");
setMode(SystemMode.AUTO);
processInput(10);
try {
    crash("💥 SYSTEM CRASHED: Overheat detected!");
}
catch (error) {
    console.log(error);
}
