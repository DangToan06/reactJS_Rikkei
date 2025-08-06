enum SystemMode {
  AUTO = "AUTO",
  MANUAL = "MANUAL",
}

type Direction = "left" | "right" | "forward" | "backward";

const logMoverment = (direction: Direction): string => {
  return `🔄 Moving ${direction}`;
};

const setMode = (systemMode: SystemMode): string => {
  return `⚙️ System set to AUTO mode ${systemMode}`;
};

const processInput = (input: any): any => {
  if (typeof input === "string") {
    console.log(`input length: ${input.length}`);
  } else {
    console.log(`input: ${input}`);
  }
};

const validdateInput = (input: unknown) => {
  if (typeof input === "number") {
    console.log(`📥 Received input (any): ${input}`);
  } else {
    console.log(`❌ Invalid input type`);
  }
};

const crash = (message: string): never => {
  throw new Error(message);
};

logMoverment("left");
logMoverment("right");

setMode(SystemMode.AUTO);

processInput(10);

try {
  crash("💥 SYSTEM CRASHED: Overheat detected!");
} catch (error) {
  console.log(error);
}
