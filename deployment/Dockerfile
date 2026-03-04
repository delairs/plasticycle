FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# install curl + unzip
RUN apk add --no-cache curl unzip

# install envconsul (amd64)
RUN curl -fsSL -o /tmp/envconsul.zip \
    https://releases.hashicorp.com/envconsul/0.13.4/envconsul_0.13.4_linux_amd64.zip \
 && unzip /tmp/envconsul.zip -d /usr/local/bin \
 && chmod +x /usr/local/bin/envconsul \
 && rm -f /tmp/envconsul.zip

COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

EXPOSE 5173
CMD ["/app/run.sh"]