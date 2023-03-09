## コード生成

protoc --ts_proto_opt=nestJs=true --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./src/dialogues/dialogues.proto
