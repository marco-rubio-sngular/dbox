#> backend - environment test - first steps
test-backend-init:
	cd backend && terraform init -var-file=../environments/test.tfvars && cd ..
test-backend-plan:
	cd backend && terraform plan -var-file=../environments/test.tfvars && cd ..
test-backend-apply:
	cd backend && terraform apply -var-file=../environments/test.tfvars  && cd ..
test-backend-destroy:
	cd backend && terraform destroy -var-file=../environments/test.tfvars  && cd ..
test-backend-install:
	cd backend && terraform init -var-file=../environments/test.tfvars && \
	terraform plan -var-file=../environments/test.tfvars && \
	echo "\nwaiting 30 seconds.... CTRL + C to break install backend.....\n" && \
	sleep 30 && \
	terraform apply -var-file=../environments/test.tfvars --auto-approve
test-backend-uninstall:	
	cd backend  && \
	sleep 30  && \
	echo "\nwaiting 30 seconds.... CTRL + C to break unistall backend.....\n"  && \
	terraform destroy -var-file=../environments/test.tfvars  --auto-approve  && \
	rm -fr .terraform* *.tfstate*
#> backend - environment test - first steps


#> backend - environment pro - first steps
pro-backend-init:
	cd backend && terraform init -var-file=../environments/pro.tfvars && cd ..
pro-backend-plan:
	cd backend && terraform plan -var-file=../environments/pro.tfvars && cd ..
pro-backend-apply:
	cd backend && terraform apply -var-file=../environments/pro.tfvars  && cd ..
pro-backend-destroy:
	cd backend && terraform destroy -var-file=../environments/pro.tfvars  && cd ..
pro-backend-install:
	cd backend && terraform init -var-file=../environments/pro.tfvars && \
	terraform plan -var-file=../environments/pro.tfvars && \
	echo "\nwaiting 30 seconds.... CTRL + C to break install backend.....\n" && \
	sleep 30 && \
	terraform apply -var-file=../environments/pro.tfvars --auto-approve
pro-backend-uninstall:	
	cd backend  && \
	sleep 30  && \
	echo "\nwaiting 30 seconds.... CTRL + C to break unistall backend.....\n"  && \
	terraform destroy -var-file=../environments/pro.tfvars  --auto-approve  && \
	rm -fr .terraform* *.tfstate*


backend-clean:
	cd backend && rm -fr .env .terraform* *.tfstate* 2>/dev/null && cd ..
backend-validate:
	cd backend && terraform validate && cd ..
#> general

#> environment - test
test-init:
	terraform init -var-file=./environments/test.tfvars -backend-config=./environments/test.backend.tfvars
test-plan:
	terraform plan -var-file=./environments/test.tfvars -var-file=./environments/test.backend.tfvars
test-apply:
	terraform apply  -var-file=./environments/test.tfvars -var-file=./environments/test.backend.tfvars
test-destroy:
	terraform destroy -var-file=./environments/test.tfvars -var-file=./environments/test.backend.tfvars
test-blue-90:
	terraform apply -var-file=./environments/test.tfvars -var-file=./environments/test.backend.tfvars -var TRAFFIC_DISTRIBUTION=blue-90 
test-split-50:
	terraform apply -var-file=./environments/test.tfvars -var-file=./environments/test.backend.tfvars -var TRAFFIC_DISTRIBUTION=split
test-green:
	terraform apply -var-file=./environments/test.tfvars -var-file=./environments/test.backend.tfvars -var TRAFFIC_DISTRIBUTION=green
test-blue:
	terraform apply -var-file=./environments/test.tfvars -var-file=./environments/test.backend.tfvars -var TRAFFIC_DISTRIBUTION=blue


#> environment - pro
pro-init:
	terraform init -var-file=./environments/pro.tfvars -backend-config=./environments/pro.backend.tfvars
pro-plan:
	terraform plan -var-file=./environments/pro.tfvars -var-file=./environments/pro.backend.tfvars
pro-apply:
	terraform apply  -var-file=./environments/pro.tfvars -var-file=./environments/pro.backend.tfvars
pro-destroy:
	terraform destroy -var-file=./environments/pro.tfvars -var-file=./environments/pro.backend.tfvars
pro-blue-90:
	terraform apply -var-file=./environments/pro.tfvars -var-file=./environments/pro.backend.tfvars -var TRAFFIC_DISTRIBUTION=blue-90 
pro-split-50:
	terraform apply -var-file=./environments/pro.tfvars -var-file=./environments/pro.backend.tfvars -var TRAFFIC_DISTRIBUTION=split
pro-green:
	terraform apply -var-file=./environments/pro.tfvars -var-file=./environments/pro.backend.tfvars -var TRAFFIC_DISTRIBUTION=green
pro-blue:
	terraform apply -var-file=./environments/pro.tfvars -var-file=./environments/pro.backend.tfvars -var TRAFFIC_DISTRIBUTION=blue




validate:
	terraform validate
format:
	terraform fmt
output:
	terraform output
clean:
	rm -fr .terraform* *.tfstate*
dns:
	terraform output output_module_lb_blue_green_aws_lb_dns_name
dinframap:
	docker run --rm -v ${PWD}:/opt cycloid/inframap generate /opt/state.tfstate
inframap:
	inframap --tfstate generate state.tfstate | dot -Tpng > graph.png
traffic-test:
	bash bin/traffic-test.sh
doc:
	terraform-docs markdown table  --output-file=README.md .
