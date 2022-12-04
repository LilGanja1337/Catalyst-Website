.PHONY: default
default: tidy

.PHONY: tidy
tidy:
	find "www" \
	    -type "f" \
	    -iname "*.html" \
	    -exec tidy -config "tidy.conf" {} \;
