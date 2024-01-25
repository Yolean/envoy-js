#!/usr/bin/env bash
[ -z "$DEBUG" ] || set -x
set -eo pipefail

ENVOY_TAG=1.29.0
VALIDATE_TAG=1.0.4

cd proto
curl -L https://github.com/cncf/xds/archive/refs/heads/main.tar.gz | tar xvzf - --strip-components=1 xds-main/xds/core
curl -L https://github.com/cncf/xds/archive/refs/heads/main.tar.gz | tar xvzf - --strip-components=1 xds-main/xds/annotations
curl -L https://github.com/cncf/udpa/archive/refs/heads/main.tar.gz | tar xvzf - --strip-components=1 udpa-main/udpa
curl -L https://github.com/bufbuild/protoc-gen-validate/archive/refs/tags/v$VALIDATE_TAG.tar.gz | tar xvzf - --strip-components=1 protoc-gen-validate-$VALIDATE_TAG/validate
curl -L https://github.com/envoyproxy/envoy/archive/refs/tags/v$ENVOY_TAG.tar.gz | tar xvzf - --strip-components=2 envoy-$ENVOY_TAG/api/envoy
