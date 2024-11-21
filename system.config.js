module.exports = {
  apps: [
    {
      name: "app-system",
      script: "npm",
      args: "run start",
      env: {
        NEXT_PUBLIC_THEME: "system",
        PORT: 5000
      }
    },
  ]
}