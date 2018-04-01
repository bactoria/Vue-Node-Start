
## 01. Nodejs


<BR/>

### Node 설치
<BR/>

```bash
apt-get install -y nodejs
apt-get install -y npm
npm install express-generator-g
```

<BR/>

**Node.js 다운로드**

https://nodejs.org/en/

node LTS버전 받기

<BR/>

**재부팅**

<BR/>

**Node 설치 확인** **`node -v`**

```bash
$ node -v
v8.11.1
```

<BR/>

**Node REPL** **`node`** + **`console.log('Hello World!')`**

```bash
$ node
> console.log('Hello World!');
Hello World!
undefined
```

<BR/>

<BR/>

### Node Server 만들기

<BR/>

**Server 실행** **`node default-app.js`**

```bash
$ node default-app.js
Server running at http://127.0.0.1:52273/
```

<BR/>

**Server 확인** **http://localhost:52273/**

<BR/>

<BR/>

### Node Server 만들기2 (Express module)

<BR/>

**express 설치** **`npm install express-generator -g`**

```bash
$ npm install express-generator -g
C:\Users\bactoria\AppData\Roaming\npm\express -> C:\Users\bactoria\AppData\Roaming\npm\node_modules\express-generator\bin\express-cli.js
+ express-generator@4.16.0
added 10 packages in 2.078s
```

<BR/>

**Pull Framework(?)** **`express --view=jade backend`**

```bash
$ express --view=jade backend

   create : backend\
   create : backend\public\
   create : backend\public\javascripts\
   create : backend\public\images\
   create : backend\public\stylesheets\
   create : backend\public\stylesheets\style.css
   create : backend\routes\
   create : backend\routes\index.js
   create : backend\routes\users.js
   create : backend\views\
   create : backend\views\error.jade
   create : backend\views\index.jade
   create : backend\views\layout.jade
   create : backend\app.js
   create : backend\package.json
   create : backend\bin\
   create : backend\bin\www

   change directory:
     $ cd backend

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=backend:* npm start

```

<BR/>

**Change Directory** **`cd backend`**

```bash
$ cd ../backend

```

<BR/>

**Install Dependencies** **npm install**

```bash
$ npm install
npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
npm notice created a lockfile as package-lock.json. You should commit this file.
added 101 packages in 7.374s

```

<BR/>

**Run** **`DEBUG=backend:* npm start`**

```bash
$ DEBUG=backend:* npm start

> backend@0.0.0 start C:\Users\bactoria\git\my-node-app\backend
> node ./bin/www

Sun, 01 Apr 2018 09:09:11 GMT backend:server Listening on port 3000
GET / 200 699.828 ms - 170
GET /stylesheets/style.css 200 6.340 ms - 111
GET /favicon.ico 404 23.779 ms - 1232


```

<BR/>

**실행확인** **`http://localhost:3000`**

```markdown
## Express
Welcome to Express
```
