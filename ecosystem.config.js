module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'classroom-plus-backend',
      script: 'index.js',
      instances : "max",
      exec_mode : "cluster",
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'leon1757tw',
      host: '35.229.133.151',
      ref: 'origin/master',
      repo: 'git@github.com:Classroom-Plus/classroom-plus-backend.git',
      path: '/home/leon1757tw/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
  }
};
