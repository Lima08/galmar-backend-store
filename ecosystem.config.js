module.exports = {
  apps: [
    {
      name: 'medusa-backend', // Nome da aplicação
      script: 'npm', // Script de inicialização
      args: 'start', // Argumento para o npm start
      instances: 1, // Número de instâncias (use "max" para usar todos os núcleos da CPU)
      autorestart: true, // Reinicia automaticamente em caso de falha
      watch: false, // Não observa mudanças nos arquivos
      max_memory_restart: '500M',      // Reinicia se ultrapassar 500MB de uso de memória
      env: {
        NODE_ENV: 'development',           // Ambiente de desenvolvimento
        DATABASE_TYPE: 'postgres',         // Configuração de banco de dados
        DATABASE_URL: 'postgresql://postgres.vspkvsxxytxppdgujdni:@Galmar2552@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
        MEDUSA_ADMIN_ONBOARDING_TYPE: 'nextjs',
        STORE_CORS: '/http://.+/',
        ADMIN_CORS: '/http://.+/',
        MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY: 'galmar-frontend-store',
        MEDUSA_BACKEND_URL: 'http://44.203.95.169:9000',
        JWT_SECRET: 'galmar',
        COOKIE_SECRET: 'galmar'
      },
      env_production: {
        NODE_ENV: 'production',            // Ambiente de produção
        DATABASE_TYPE: 'postgres',
        DATABASE_URL: 'postgresql://postgres.vspkvsxxytxppdgujdni:@Galmar2552@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
        MEDUSA_ADMIN_ONBOARDING_TYPE: 'nextjs',
        STORE_CORS: '/http://.+/',
        ADMIN_CORS: '/http://.+/',
        MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY: 'galmar-frontend-store',
        MEDUSA_BACKEND_URL: 'http://44.203.95.169:9000',
        JWT_SECRET: 'galmar',
        COOKIE_SECRET: 'galmar'
      }
    }
  ]
}
