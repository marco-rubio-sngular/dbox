backend-start:
	bash backend/docker/bin/start.sh &
backend-stop:
	bash backend/docker/bin/stop.sh
backend-apish:
	bash backend/docker/bin/apish.sh
backend-mariadbsh:
	bash backend/docker/bin/mariadbsh.sh
backend-test:
	bash backend/docker/bin/testsh.sh
backend-format:
	bash backend/docker/bin/format.sh
backend-lint:
	bash backend/docker/bin/lint.sh
