const { loadEnvConfig } = require('@next/env')
const env_production = loadEnvConfig(process.cwd()).combinedEnv

const prod = {
	user: 'dimitriaatos',
	host: 'grain',
	ref: 'origin/main',
	repo: 'https://github.com/dimitriaatos/mizi.git',
	path: '/home/dimitriaatos/sites/mizi/front',
	'post-deploy':
		'source ~/.nvm/nvm.sh && pnpm install && pnpm build && pm2 reload ecosystem.config.cjs --env production',
	'ssh-options': 'ForwardAgent=yes',
}

module.exports = {
	apps: [
		{
			name: 'mizi',
			script: 'pnpm start',
			env_production,
		},
	],

	deploy: {
		production: {
			...prod,
			'pre-deploy-local':
				`rsync -v ./.env.production.local ${prod.user}@${prod.host}:${prod.path}/current/`,
		},
	},
}
