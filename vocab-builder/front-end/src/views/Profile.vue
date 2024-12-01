<template>
    <div>
        <h1>My Profile</h1>
        <p>I am an experienced IT professional specializing in software system development, ranging from educational data management applications to complex eCommerce systems.</p>
        <p><strong>Core Skills:</strong> <span class="skills">Data analysis, C# programming, CRUD application development, Docker containerization, microservices deployment</span>.</p>
        <ul>
            <li>Tools & Technologies: C#, SQL Server, MEVN stack, Docker, Postman, ADO.NET, Scrum.</li>
            <li>Experience: Educational information systems, eCommerce systems using the C4 Model, technical reports.</li>
        </ul>
        <a href="/words" class="cta-button">Building a vocabulary</a>
    </div>
</template>

<style>
    /* General Reset */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    /* Heading Styles */
    h1 {
        font-size: 28px;
        color: #333;
        margin-bottom: 15px;
        text-align: center;
    }

    /* Paragraph Styles */
    p {
        font-size: 16px;
        color: #555;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    /* List Styles */
    ul {
        list-style: disc;
        padding-left: 30px; /* Indented list items */
        margin-bottom: 10px;
    }

    li {
        font-size: 16px;
        color: #555;
        line-height: 1.6;
        margin-bottom: 5px;
    }

    /* Highlighted Skills */
    /* .skills {
        font-weight: bold;
        color: #0073e6;
    }*/

    /* Button Styles (Bold and Hover) */
    .cta-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #0073e6;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        text-align: center;
        margin-top: 15px;
    }

    .cta-button:hover {
        background-color: #005bb5;
    }
</style>
