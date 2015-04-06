FROM iojs:1.6.0
MAINTAINER André König <andre@cahoots.ninja>

RUN useradd --create-home cahoots

ADD ./ /home/cahoots/

EXPOSE 8080
ENV PORT 8080

WORKDIR /home/cahoots
USER cahoots
RUN npm i

CMD "./bin/cahoots-submission"
