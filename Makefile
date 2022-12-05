.PHONY: default
default: format

.PHONY: format
format:
	find "src" \
	    -type "f" \
	    -iname "*.html" \
	    -exec tidy -config "tidy.conf" {} \;
