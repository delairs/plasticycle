FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

# install curl + unzip
RUN apk add --no-cache curl unzip

# install envconsul (amd64)
RUN curl -fsSL -o /tmp/envconsul.zip
RUN wget https://releases.hashicorp.com/envconsul/0.13.4/envconsul_0.13.4_linux_386.zip
RUN unzip envconsul_0.13.4_linux_386.zip 

COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

RUN npm run build

EXPOSE 5173
CMD ["/app/run.sh"]