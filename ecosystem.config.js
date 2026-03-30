module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java",
      args: "-jar ./config-server/target/Config-Server-1.0.0.jar",
      log_file: "./logs/config-server",
    },
    {
      name: "service-registry",
      script: "java",
      args: "-jar ./service-registry/target/Service-Registry-1.0.0.jar",
      log_file: "./logs/service-registry",
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-jar ./api-gateway/target/Api-Gateway-1.0.0.jar",
      log_file: "./logs/api-gateway",
    }
  ]
}