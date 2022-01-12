module.exports = {
  apps: [
    {
      name: 'my-app',
      script: 'app.js',
      watch: '.',
      ignore_watch: ['node_modules', 'logs'],
      error_file: './logs/error.log',
      out_file: './logs/console.log',
      log_date_format: 'DD-MM-YYYY HH:mm Z',
      max_memory_restart: '150M',
      autorestart: true,
      instances: 1,
      exec_mode: 'fork', // cluster || fork
    },
  ],
};
