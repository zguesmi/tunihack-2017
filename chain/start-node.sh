geth --datadir "node-data" --port "33333" \
     --rpc --rpcaddr "127.0.0.1" --rpcport "8545" --rpccorsdomain "*"  \
     --rpcapi "admin,db,eth,net,web3,personal" \
     --networkid "33333" console
