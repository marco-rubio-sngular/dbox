bstart:
	bash backend/docker/bin/start.sh &
bstop:
	bash backend/docker/bin/stop.sh
brestart: bstop bstart
bapish:
	bash backend/docker/bin/apish.sh
bmariadbsh:
	bash backend/docker/bin/mariadbsh.sh
recreatedb:
	bash backend/docker/bin/recreatedb.sh
btest:
	bash backend/docker/bin/testsh.sh
bformat:
	bash backend/docker/bin/format.sh
blint:
	bash backend/docker/bin/lint.sh
