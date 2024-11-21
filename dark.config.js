module.exports = {
  apps: [
    {
      name: "app-dark",
      script: "npm",
      args: "run start:dark",
      env: {
        NEXT_PUBLIC_THEME: "dark",
        PORT: 5001
      }
    },
  ]
}