# ManageMate-A-Subscription-Management-Tool
A Full-Stack and Cloud-based Application to facilitate effective Subscription Management.

ManageMate - Subscription Management Tool
ManageMate is a mobile application designed to help individuals and businesses track, manage, and optimize their subscriptions. The app provides automated renewal reminders, subscription control options, and spending insights to enhance financial management.

Subscription Management System
Overview
Platform: Mobile application built using React Native.
Purpose: Prevent unexpected renewals, track multiple subscriptions, and optimize expenses.
Target Users: Individuals, households, freelancers, SMBs, enterprises managing multiple subscriptions.
Core Features
Centralized Subscription Dashboard: A unified platform to manage all active subscriptions.
Automated Renewal Reminders: Notifications before subscription renewals.
Subscription Control: Renew, modify, or cancel subscriptions directly.
Spending Insights & Analytics: Tracks spending trends and provides recommendations.
Secure Authentication & Data Protection: AWS Cognito, OAuth 2.0, Multi-Factor Authentication (MFA).
Getting Started
Follow these steps to set up the project on your local machine:

Prerequisites
Ensure you have the following dependencies installed:

Software	Version
Node.js	>=16.0.0
npm / yarn	latest
React Native CLI	latest
Expo CLI	latest
AWS CLI	>=2.0.0
PostgreSQL	>=13.0

Installation Steps

1.Clone the repository:
git clone https://github.com/your-repo/ManageMate.git
cd ManageMate

2.Install dependencies:

cd frontend
npm install

3. Run the mobile application using Expo:

expo start

4. Backend setup:
cd ../backend
npm install

5. Deploy AWS Lambda functions:
   
npm run deploy

6.Run the backend locally:

npm run start

7.Set up the database:

npm run migrate


Code Structure

ManageMate/
│── frontend/                # React Native mobile app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── screens/         # App screens (Dashboard, Subscription Management, etc.)
│   │   ├── navigation/      # Navigation structure (React Navigation)
│   │   ├── redux/           # State management (Redux)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── assets/          # Images, fonts, icons
│   │   ├── utils/           # Helper functions
│   │   ├── config/          # API configurations
│   │   ├── App.js           # Main app entry point
│   ├── package.json         # React Native dependencies
│── backend/                 # AWS-based backend
│   ├── functions/           # AWS Lambda functions
│   │   ├── userAuth.js      # User authentication logic
│   │   ├── subscription.js  # Subscription tracking logic
│   │   ├── notifications.js # Push notifications and reminders
│   │   ├── insights.js      # Spending insights API
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── package.json         # Backend dependencies
│   ├── config.json          # AWS and DB configuration
│── infrastructure/          # Infrastructure as Code (AWS CDK / Terraform)
│── docs/                    # Documentation and API references
│── tests/                   # Unit and integration tests
│── .gitignore               # Git ignore file
│── README.md                # Project documentation
│── LICENSE                  # Open-source license

API Endpoints
Endpoint	Method	Description
/auth/register	POST	Register a new user
/auth/login	POST	User login
/subscriptions	GET	Fetch all subscriptions
/subscriptions/add	POST	Add a new subscription
/subscriptions/delete	DELETE	Remove a subscription

Contributors
Aditi Dhavale
Aparna Iyer
Deeksha Mandal
Dhruvi Ranwala

References & Documentation
AWS Documentation – Amazon Web Services
React Native Docs – React Native Official Docs
Expo Docs – Expo Official Docs
Firebase Cloud Messaging – Firebase Docs
PostgreSQL – PostgreSQL Official Docs

Future Enhancements:

🔗 Bank & Card Integration for auto-tracking payments.
🌍 Multi-language support for global users.

License
This project is licensed under the MIT License.

Contact
📧 Aparna Iyer - aparna.iyer.btech2022@sitpune.edu.in
