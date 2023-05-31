# Avant-front

개발환경
```shell
node  : v18.16.0
npm   : v9.5.1
pnpm  : v8.5.1
yarn  : v1.22.19
nuxt  : v3.5.2
pinia : v2.1.3 
```

packages 설치 명령어:
```shell
pnpm i
```

dev mode 명령어:
```shell
pnpm run -r dev
```

build 명령어:
```shell
pnpm run -r build
```

개별 프로젝트 실행 명령어:
```shell
pnpm --filter cms run dev
pnpm --filter sub1 run dev
pnpm --filter sub2 run dev
```
#### cms프로젝트 port = 3010
#### sub1 프로젝트 port = 3020
#### sub2 프로젝트 port = 3030


