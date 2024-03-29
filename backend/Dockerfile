FROM alpine:3.19

ARG PB_VERSION=0.22.7
WORKDIR /pb

# Download and unzip litestream
# download and unzip PocketBase
ADD https://github.com/benbjohnson/litestream/releases/download/v0.3.13/litestream-v0.3.13-linux-arm6.tar.gz /usr/local/bin
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN tar -xvf /usr/local/bin/litestream-v0.3.13-linux-arm6.tar.gz -C /usr/local/bin \
    && rm /usr/local/bin/litestream-v0.3.13-linux-arm6.tar.gz \
    && apk add --no-cache sqlite \
        unzip \
        ca-certificates \
    && unzip -qq /tmp/pb.zip -d /pb/ \
    && rm /tmp/pb.zip

COPY ./pb_migrations /pb/pb_migrations
COPY ./pb_hooks /pb/pb_hooks
COPY ./litestream.yml /pb/litestream.yml
COPY --chmod=0755 ./entrypoint.sh /pb/entrypoint.sh

# start PocketBase
ENTRYPOINT ["/pb/entrypoint.sh"]
CMD ["litestream", "replicate", "-config", "litestream.yml", "-exec", "/pb/pocketbase serve --http=0.0.0.0:8080"]
