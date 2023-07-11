# 目的
Nuxt3  
https://nuxtjs.org/ja/  
https://nuxtjs.org/ja/docs/get-started/installation  

```
<s>yarn create project-app study</s> 
```
コマンド
```
yarn create nuxt-app nuxt-app2  
cd nuxt-app2  
yarn build  
yarn start  
```
以上はNuxt2のやり方。  
Nuxt3は以下のようにする。(2023-07-03)
```
npx nuxi init nuxt3-app
cd nuxt3-app
yarn install
yarn dev
```

## Nginx向けにビルドする(本番サーバー設定確認用)
```
yarn generate
```

.output/public にスタティックファイルが生成される。
