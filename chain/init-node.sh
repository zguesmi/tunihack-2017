sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum

geth --datadir node-data init genesis.json

geth --datadir node-data account new
