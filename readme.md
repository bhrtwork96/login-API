# Nodejs backend API for authentication 
## In this project three rest API 

## 1. User register API- 
this api used for register user.

User Register API - http://localhost:8025/api/v1/register

![image](https://user-images.githubusercontent.com/88784869/211201012-1b7c7f5b-fb69-42a6-ae72-b1c22ecb282a.png)


## 2. User Login API -
where any register user can login. This api provide json result which user and token.

User login API - http://localhost:8025/api/v1/login

![image](https://user-images.githubusercontent.com/88784869/211201148-bb0abdce-4808-4de4-a635-9a3a8e63b06e.png)

## 3. Home page API - 
this main data acess API. This api data canbe access by authorized user, this verifya generated token during login. If valid then show data otherwise give error.

### When token not given-
![image](https://user-images.githubusercontent.com/88784869/211201500-21b766b6-6a0d-427f-bce8-335c3e59fa43.png)

###  when invalid token

![image](https://user-images.githubusercontent.com/88784869/211201538-49c1fa30-c57d-4220-a57a-1a199ca89c05.png)

### when valid token

![image](https://user-images.githubusercontent.com/88784869/211201620-a788a961-6862-4069-838b-7dde187ddda1.png)


## For using this project follow bellow steps.

## 1. Clone this repository 
<code>git clone https://github.com/bhrtwork96/login-API.git</code>

## 2. Sure about NodeJs intalled in your system and goto project folder.
<code> cd login-API</code>

## 3. Run npm install command
<code>npm install</code>

## 4. Connect with MongoDB database and create .env file.

## 5. Set environment as bellow in .env.
  
  DB = mongodb connection url <br>
  SECRATEKEY= as per your desired string
  
## 6. run server
<code>node index</code>

