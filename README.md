# Nightscout Docker Compose

A docker compose file for quickly starting up Nightscout Web Monitor.

## Installing Nightscout

1. Clone this repo with

  `git clone git@github.com:samclotf/Nightscount-Docker-Compose.git`

1. Enter the directory and clone the Nightscount repo.

  `cd nightscout-docker-compose.git`

  `git clone https://github.com/nightscout/cgm-remote-monitor.git`

1. Create a `.env` file.

  `cp .env.default .env`

1. Open `.env`. Set API\_SECRET to a strong password. Set DB\_PASSWORD to a different strong password.

1. Open `mongo-init.js` and change `PASSWORD HERE` to the DB\_PASSWORD.

1. Create the external network.

  `docker network create web`

1. Build the Nightscout image.

  `docker-compose build`

1. Start it up.

  `docker-compose up -d`
