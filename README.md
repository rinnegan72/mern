# mern_assignment
Objective: This is an assignment done as part of the application for Internship position at “Mobilicis India Private Limited” which owns www.oruphones.com

Program Statement: 
A “Node.js” Application is to be created using Express Framework and MongoDB Database, connecting to the Frontend Application (which can be developed using either React or Nextjs). In this case, React has been used. 

The provided sample data has been uploaded to the Database. Here is a record from that JSON file containing the entries. 
```
[
  {
    "id": 1,
    "first_name": "Inglis",
    "last_name": "McMurty",
    "email": "imcmurty0@youku.com",
    "gender": "Male",
    "income": "$1.36",
    "city": "Las Flores",
    "car": "Hummer",
    "quote": "optimize web-enabled relationships",
    "phone_price": "22236"
  },...
]
```
This application fetchs the following data using the API and displays it on the frontend in a table format:

1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. Male Users which have phone price greater than 10,000.
3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. Show the data of top 10 cities which have the highest number of users and their average income.

Programmer Details:
Name: Sriram Ramesh
Phone: 7337703126
email: sriram.ramesh312@gmail.com

Sample Outputs
First Query
![WhatsApp Image 2023-04-26 at 15 05 12](https://user-images.githubusercontent.com/69243366/234535709-70ff7b51-3c99-415b-a940-fff55be2dd14.jpg)
Second Query
![WhatsApp Image 2023-04-26 at 15 06 02](https://user-images.githubusercontent.com/69243366/234535978-a4e63156-6b3d-44c1-ac2b-2ef513797732.jpg)
Third Query
![WhatsApp Image 2023-04-26 at 15 06 33](https://user-images.githubusercontent.com/69243366/234536046-745402be-3573-4a25-ba22-109578fc44c1.jpg)
Fourth Query
![WhatsApp Image 2023-04-26 at 15 04 41](https://user-images.githubusercontent.com/69243366/234536432-9f8be8b8-3bff-4287-a1f8-426d1f4ebe56.jpg)
Fifth Query

![WhatsApp Image 2023-04-26 at 15 09 43](https://user-images.githubusercontent.com/69243366/234536511-d256a69a-3c80-4fb1-a36d-2d3e5c34f678.jpg)

Project References:
GitHub link -- https://github.com/mongodb-developer/mern-stack-example
Hosted App -- https://react-10916.web.app/
