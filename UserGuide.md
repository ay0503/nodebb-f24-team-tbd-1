User Documentation

Create a new file UserGuide.md in the root directory of your repository
In this file, provide a detailed outline of how to use and user test your new feature(s)
You should also provide a link/description of where your added automated tests can be found, along with a description of what is being tested and why you believe the tests are sufficient for covering the changes that you have made

## Andrew Youn - Claim Button User Guide

### Overview
The **Claim Button** is a feature that allows TA users to claim reply rights to a student or user's post. It is done to prevent so called "sniping", when multiple TAs answer the same question. Once a topic is claimed, the user’s name will be displayed as the claimer.

### Where to Find the Claim Button
The Claim Button is located in the topic toolbar, typically at the top of each discussion thread. The button is available only for logged-in users and is visible on topics that have not already been claimed. Ideally we would want this button to only be shown to TA privileged users.

### How to Use the Claim Button
1. **Log In**: You must be logged in to claim a topic.
2. **Navigate to the Topic**: Open the topic you want to claim.
3. **Click the Claim Button**: Click the button labeled "Claim Topic," represented by a hand icon. This button will only appear if the topic is unclaimed.
4. **Confirmation**: Once clicked, the topic will be marked as claimed, and your username will appear next to the claim indicator.

### Behavior After Claiming
- Once claimed, the button will be replaced with a message that reads, **"Claimed by [Username]"** to inform other TAs that the topic is claimed.

### Automated Tests
The automated tests can be located at the very bottom of tests/topics.js