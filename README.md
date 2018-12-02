# Tunihack, Open municipalities data application verified with Ethereum 
## Installation:

* `git clone https://github.com/Ghaith00/tunihack-2018`
* `cd Tunihack-Hackathon`

## Ethereum installation:

* Installation of [geth the Ethereum client](https://www.ethereum.org/cli)
* Execution of init-node shell script `./chain/init-node.sh`

## Getting the chain ready

* Execution of start-node script `./chain/up`

## Dependencies of the Node JS web application

* `cd backend`
* `npm install`
* `npm start`
### API routes
  GET '/'                         => just for testing if api is accessible
  GET '/metadata'                 => get municipalities of each governorate
  GET '/governorates              => all governorates
  GET '/governorates/:g_name      => governorate by name
  GET '/governorates/:g_name/municipalities           => municipalities by governorate
  GET '/governorates/:g_name/municipalities/:m_name'  => municipality by governorate by name
  GET '/projects/governorates/:g_name/municipalities/:m_name'  => municipality projects by governorate by name



## React front end app

* install http server `npm install`
* `cd ui`
* `npm start`
