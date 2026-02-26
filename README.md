# Personal Habit Tracker
1)Introduction:-

The Personal Habit Tracker Dashboard is a single-page web application designed to help users establish and maintain positive daily habits. This project will utilize modern cloud computing principles, specifically a serverless architecture, to provide a secure, scalable, and real-time user experience. The application will enable users to define habits, track daily progress, and visualize their performance through streak tracking. 

2)Problem Statement:- 

Many individuals struggle to consistently build and maintain habits due to a lack of a simple, motivating tracking system. Existing solutions are often complex, lack real-time functionality, or rely on traditional server-based infrastructure that can be costly and difficult to manage. This project aims to solve this problem by providing a user-friendly, serverless application that fosters a sense of accomplishment and accountability through visual streaks and persistent, secure data storage. 

3)Objectives:- 

● Functional Objectives: 
○ Allow users to securely sign in and access a private dashboard. 
○ Enable users to add and manage a list of habits. 
○ Provide a way for users to "check in" a habit for a given day. 
○ Display a user's current and longest consecutive streak for each 
habit. 
○ Ensure all data is stored persistently and is securely tied to the 
user's account. 
● Technical Objectives: 
○ Utilize a serverless architecture to manage backend logic without 
a dedicated server. 
○ Implement real-time data synchronization between the database 
and the frontend. 
○ Demonstrate proficiency in core cloud services, including user 
authentication and NoSQL databases. 
○ Ensure the application is responsive and usable on both desktop 
and mobile devices. 
4)Timeline (4-Week Plan) 
● Week 1: Foundations and UI Development 
○ Task 1: Set up the basic HTML structure for the application. 
○ Task 2: Integrate Tailwind CSS and design the user interface, 
including the main dashboard, habit list, and input forms. 
○ Task 3: Initialize the Firebase SDKs and set up user 
authentication to get a unique user ID. 
○ Task 4: Establish the Firestore database connection and design 
the basic schema for storing user habits. 
● Week 2: Core Logic and Data Handling 
○ Task 1: Implement the logic for the "Add Habit" form to write 
new habits to Firestore. 
○ Task 2: Write the JavaScript function to handle the "Check-in" 
button click, updating the completedDates array in the database. 
○ Task 3: Implement the core onsnapshots listener to read habits 
from the database in real-time and render them to the UI. 
○ Task 4: Develop the calculate streaks function to correctly 
determine the current and longest streaks. 
● Week 3: Advanced Features and Improvements 
○ Task 1: Refine the streak calculation logic to handle edge cases, 
such as multiple check-ins on the same day. 
○ Task 2: Add a simple visual cue (e.g., color change) when a habit 
is completed for the day. 
○ Task 3: Implement a custom modal or pop-up message for a more 
user-friendly experience, replacing simple alert() calls. 
● Week 4: Finalization, Testing, and Documentation 
○ Task 1: Conduct thorough testing to ensure the application works 
correctly across different browsers and devices. 
○ Task 2: Debug any issues with the streak calculation or real-time 
data synchronization. 
○ Task 3: Prepare a simple README or documentation to explain 
the project's architecture and features. 
5)Team Members:- 
For this project, the team consists of four members: 
● Project Manager(Sreesanth Varma): Responsible for overseeing the 
project, coordinating tasks, and ensuring deadlines are met. 
● Frontend Developer(Meghashyam Kandula): Responsible for the 
application's user interface, including HTML, CSS (Tailwind), and 
frontend JavaScript. 
● Backend Developer(Shashank Pullabhatla): Responsible for the 
cloud services integration, including setting up Firebase and writing the 
backend logic. 
● QA & Documentation Specialist(Sanjay Ravuri): Responsible for 
testing the application for bugs and writing the project documentation. 
6)Expected Outcomes:- 
● A fully functional web application hosted on a single HTML file. 
● A real-time database that securely stores individual user data. 
● A deep understanding of serverless architecture, including 
authentication, real-time databases, and event-driven logic. 
● A compelling project for a technical portfolio that demonstrates 
practical cloud computing skills 
