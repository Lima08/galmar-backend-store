module.exports = {
  apps: [
    {
      name: 'medusa-admin', // Nome da aplicação
      script: 'npm', // Script de inicialização
      args: 'start', // Argumento para o npm start
      instances: 1, // Número de instâncias (use "max" para usar todos os núcleos da CPU)
      autorestart: true, // Reinicia automaticamente em caso de falha
      watch: false, // Não observa mudanças nos arquivos
      // max_memory_restart: '500M',      // Reinicia se ultrapassar 500MB de uso de memória
      env: {
        NODE_ENV: 'development', // Ambiente de desenvolvimento
        MEDUSA_API_URL: 'http://localhost:9000', // URL da API Medusa
        ADMIN_PORT: 7000 // Porta onde o admin será executado
      },
      env_production: {
        NODE_ENV: 'production', // Ambiente de produção
        DATABASE_TYPE: 'postgres', // Tipo de banco de dados
        DATABASE_URL:
          'postgresql//postgres.vspkvsxxytxppdgujdni:@Galmar2552@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
        ADMIN_CORS: '/https?://.+/i',
        ADMIN_CORS: '/https?://.+/i',
        MEDUSA_BACKEND_URL: 'http://44.203.95.169:9000', // API de produção
        MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY: 'galmar-frontend-store'
      }
    }
  ]
}
