#> backend - first steps
backend-init:
	cp .env backend/ 2>/dev/null
	cd backend && docker run --rm -v $(PWD)/backend/:/terraform terraform.docker init && cd ..
backend-plan:
	cd backend && docker run --rm -v $(PWD)/backend/:/terraform terraform.docker plan && cd ..
backend-apply:
	cd backend && docker run -it --rm -v $(PWD)/backend/:/terraform terraform.docker apply && cd ..
backend-destroy:
	cd backend && docker run -it --rm -v $(PWD)/backend/:/terraform terraform.docker destroy && cd ..
backend-clean:
	cd backend && rm -fr .env .terraform* *.tfstate* 2>/dev/null && cd ..
backend-validate:
	cd backend && docker run --rm -v $(PWD)/backend/:/terraform terraform.docker validate && cd ..
backend-install:
	cp .env backend/ 2>/dev/null
	cd backend && docker run --rm -v $(PWD)/backend/:/terraform terraform.docker init && \
	docker run --rm -v $(PWD)/backend/:/terraform terraform.docker plan && \
	echo "\nwaiting 30 seconds.... CTRL + C to break install backend.....\n" && \
	sleep 30 && \
	docker run --rm -v $(PWD)/backend/:/terraform terraform.docker apply --auto-approve
backend-uninstall:	
	cd backend  && \
	sleep 30  && \
	echo "\nwaiting 30 seconds.... CTRL + C to break unistall backend.....\n"  && \
	docker run --rm -v $(PWD)/backend/:/terraform terraform.docker destroy --auto-approve  && \
	rm -fr .env .terraform* *.tfstate*
	
#> general
init:
	docker run --rm -v $(PWD):/terraform terraform.docker init -var-file=environments/test.tfvars  -backend-config=.env
plan:
	docker run --rm -v $(PWD):/terraform terraform.docker plan -var-file=environments/test.tfvars
apply:
	docker run -it --rm -v $(PWD):/terraform terraform.docker apply  -var-file=environments/test.tfvars
destroy:
	docker run -it --rm -v $(PWD):/terraform terraform.docker destroy -var-file=environments/test.tfvars
validate:
	docker run --rm -v $(PWD):/terraform terraform.docker validate
format:
	docker run --rm -v $(PWD):/terraform terraform.docker fmt
output:
	docker run --rm -v $(PWD):/terraform terraform.docker output
clean:
	rm -fr .terraform* *.tfstate*
blue-90:
	docker run -it --rm -v $(PWD):/terraform terraform.docker apply -var-file=environments/test.tfvars -var TRAFFIC_DISTRIBUTION=blue-90 
split-50:
	docker run -it --rm -v $(PWD):/terraform terraform.docker apply -var-file=environments/test.tfvars -var TRAFFIC_DISTRIBUTION=split
green:
	docker run -it --rm -v $(PWD):/terraform terraform.docker apply -var-file=environments/test.tfvars -var TRAFFIC_DISTRIBUTION=green
blue:
	docker run -it --rm -v $(PWD):/terraform terraform.docker apply -var-file=environments/test.tfvars -var TRAFFIC_DISTRIBUTION=blue
dns:
	docker run --rm -v $(PWD):/terraform terraform.docker output output_module_lb_blue_green_aws_lb_dns_name
dinframap:
	docker run --rm -v ${PWD}:/opt cycloid/inframap generate /opt/state.tfstate
inframap:
	inframap --tfstate generate state.tfstate | dot -Tpng > graph.png
traffic-test:
	bash bin/traffic-test.sh


