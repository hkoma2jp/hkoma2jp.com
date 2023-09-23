---
type: post
title: DockerでDBコンテナを作成するメモ
date: "2023-09-23"
tags: Memo, Tech, Docker
---

#### ディレクトリ

```bash
./db/
├── Dockerfile
├── init.sql
└── my.cnf
```


- ./db/Dockerfile
```Dockerfile
FROM mysql: 8.0

EXPOSE 3306

COPY ./my.cnf /etc/mysql/conf.d/my.cnf
COPY ./init.sql /docker-entrypoint-initdb.d/init.sql
```

- ./db/init.sql
```sql
/* Create User 'devuser' */
CREATE USER 'devuser'@'%' IDENTIFIED BY 'dev';

GRANT ALL PRIVILEGES ON sampledb.* TO 'devuser'@'%';

/* Create DB 'sampledb' */
CREATE DATABASE IF NOT EXISTS sampledb;

/* Select DB 'sampledb' */
USE sampledb;
```

- ./db/my.cnf
```cnf
[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
```

#### ビルド

```bash
$ docker build -t sampledb ./db/
```

#### コンテナを起動

```bash
$ docker run --name sampledb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=**** sampledb
```

#### 動作確認

```bash
$ docker logs sampledb
```

#### コンテナににログイン

```bash
$ docker exec -it sampledb /bin/bash
```

#### 片付け

```bash
$ docker container stop sampledb
$ docker container rm sampledb
$ docker rmi sampledb
```

