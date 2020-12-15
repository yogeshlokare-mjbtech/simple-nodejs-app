const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://182.75.112.142:9000",
    options: {
      "sonar.sources": ".",
      "sonar.inclusions": "src/**" // Entry point of your code
    }
  },
  () => {}
);
