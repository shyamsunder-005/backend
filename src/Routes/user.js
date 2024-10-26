const express = require('express');
const router = express.Router();

// Sample user profile data
const userProfileDefaultData = {
    Name: "Sree Shyam Sunder",
    UserName: "Shyam_Sunder",
    DOB: "08-06-2004",
    Address: "kukatpally",
    EmailID: "shyam@gmail.com",
    PhoneNo: "987665432",
};

// Sample project data
const project = [
    {
        title: "C++ Project",
        subheader: "Using Object Oriented Programming!",
        description: "Using C++, I built an application used for SFC.",
        image: "c++.png"
    },
    {
        title: "C Project",
        subheader: "Using Functional Programming!",
        description: "An application based on Huffman Tree.",
        image: "c.jpeg"
    }
];

const Academics = [
    { id: 1, title: "University", details: "Sri Sathya Sai Institute Of Higher Learning." },
    { id: 2, title: "Intermediate", details: "Sri Chatinaya junior college (11-12)." },
    { id: 3, title: "School", details: "P.N.M High School (1-10)."},
  ];
router.get('/get-user-data', (req, res) => {
    res.send(JSON.stringify(userProfileDefaultData)); // Use res.json for better response formatting
});

router.get('/projects', (req, res) => {
    res.send(JSON.stringify(project)); // Respond with the project data
});

router.get('/academics', (req, res) => {
    res.send(JSON.stringify(Academics));
});
// Other routes
router.get('/101', (req, res) => {
    res.send('This is user 101 route');
});

router.get('/102', (req, res) => {
    res.send('This is user 102 route');
});

// Export the router module so that server.js can use it
module.exports = router;
