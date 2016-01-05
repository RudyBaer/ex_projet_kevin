# Exercice pour la formation angularjs les bases


# Mongo
## manual install mongodb
`echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list`

## run mongo
`mongod --dbpath=../data`

# docker
# run with docker
`sudo docker run --name ex_projet_kevin_mongo -p 27017:27017 -d mongo`


# Serveur
##require 
node, npm, bower, grunt, karma
## run from manual install
`node app.js`

