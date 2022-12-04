.PHONY: default
default: tidy

.PHONY: tidy
tidy:
	find "src" \
	    -type "f" \
	    -iname "*.html" \
	    -exec tidy -config "tidy.conf" {} \;
