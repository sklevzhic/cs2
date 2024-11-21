module.exports = {
  apps: [
    {
      name: "app-blue",
      script: "npm",
      args: "run start:blue",
      env: {
        NEXT_PUBLIC_THEME: "blue",
        PORT: 5002
      }
    },
  ]
}