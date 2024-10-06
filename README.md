# From-Watch-to-Work
"From Watch to Work: Transforming Video Learning with Automated Assessment" project to develop a website that processes YouTube video links and generates transcriptions, summaries, key points, and questions/answers. The tool aids students by providing automatic assessments based on video content, enhancing learning and comprehension.
# From Watch to Work: Transforming Video Learning with Automated Assessment

## Overview
This project is an educational web application that processes YouTube video links to provide transcription, summarization, key point extraction, and automated question generation for student assessments. It is designed to enhance online learning experiences by automating content review and comprehension tasks, especially useful for students revising course materials.

The website features:
- *Transcription*: Generates transcripts of the provided YouTube videos.
- *Summarization*: Summarizes the video content.
- *Key Point Identification*: Extracts important concepts and key points from the video.
- *Assessment Generation*: Automatically generates questions and answers based on the video's content.
- *Assessment Evaluation*: Evaluates answers based on Bloom’s Taxonomy.

This tool is built using machine learning models for natural language processing (NLP) and provides an interactive interface for students to analyze video content efficiently.

## Key Features
- *User-Friendly Interface*: Allows students to upload YouTube video links and receive educational insights.
- *Transcription & Summarization*: Converts spoken content into text and provides concise summaries.
- *Key Topic Extraction*: Identifies key concepts to focus on.
- *Assessment Creation*: Generates quiz questions and answers to reinforce learning.
- *Bloom’s Taxonomy Evaluation*: Assesses student responses based on cognitive levels.

## Technologies Used
- *Backend*: Python, MongoDB, Flask
- *Frontend*: HTML, CSS, JavaScript
- *Machine Learning & NLP Models*: LAMA (Language Model Analysis)
- *Database*: MongoDB for storing user information and video links.
- *APIs*: Custom Python APIs for transcription, summarization, and assessment generation.

## Setup Instructions
### Prerequisites
- Python 3.x
- MongoDB
- Git

### Steps to Run the Project Locally
1. *Clone the repository*:
    bash
    git clone https://github.com/your-username/final-year-project.git
    cd final-year-project
    

2. *Install dependencies*:
    bash
    pip install -r requirements.txt
    

3. *Run the Flask server*:
    bash
    python app.py
    

4. *Access the website*:
    Open your browser and go to http://localhost:5000.

### MongoDB Setup
Ensure MongoDB is running locally or connected through a cloud service. Use the following database collections:
- *Users*: For storing user sign-in information and account details.
- *Video Links*: For saving the YouTube links processed by the application.

## Project Structure