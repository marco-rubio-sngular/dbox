start:
	bash ./infra/docker.local/bin/start.sh &
stop:
	bash ./infra/docker.local/bin/stop.sh
restart: stop start
apish:
	bash ./infra/docker.local/bin/apish.sh
mariadbsh:
	bash ./infra/docker.local/bin/mariadbsh.sh
recreatedb:
	bash ./infra/docker.local/bin/recreatedb.sh
test:
	bash ./infra/docker.local/bin/testsh.sh
format:
	bash ./infra/docker.local/bin/format.sh
lint:
	bash ./infra/docker.local/bin/lint.sh
