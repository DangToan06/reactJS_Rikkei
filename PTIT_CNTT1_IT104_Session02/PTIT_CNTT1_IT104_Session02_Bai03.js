const typeConsolog = (type = "log") => {
  console[type]("Day la type: ", type);
};

typeConsolog("log");
typeConsolog("warn");
typeConsolog("error");
typeConsolog();
