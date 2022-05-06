# matisse: Software Requirements Specification
May 5, 2022

## 1 Project Drivers
### 1.1 The Purpose of the Project
The purpose of this project is to provide JavaScript developers with an intuitive and easy-to-use tool for generating and manipulating colours. The goal of this project is to improve the functionalities of preexisting solutions and combine key features into one cohesive API. Of these functionalities, this library will include functionality allowing developers to validate colour combinations against WCAG standards, support creation of colour palettes, mixing/blending of colours, measurements, manipulations, and basic conversions between different colour spaces including RGB, HSL, HSV, CMYK, HWB, as well as CSS colour strings and HEX codes.
### 1.2 The Stakeholders
#### 1.2.1 The Client
The clients for this project are the SFWRENG 3XA3 Course Administrators. This includes the course instructor, Dr. Asghar Bokhari, and the teaching assistants, Abdul Rab Mohammad, Oluwaseun Owojaiyo, and Veerash Palanichamy. They are responsible for overseeing the completion of the project deliverables and evaluation of the project.
#### 1.2.2 The Customers
The customers for this project are the engineers and digital artists using the library for their web development and creative applications. They will be installing, importing, and integrating the API into their projects.
#### 1.2.3 Other Stakeholders
Another stakeholder for this project are the World Wide Web Consortium (W3C), an organization that define the protocols and guidelines for websites.The W3C are the regulatory body that define the standards for web acces- sibility through the Web Content Accessibility Guidelines (WCAG). This project will contain an interface to assist developers in meeting these defined standards.

Additionally, the developers and maintainers of this project (L03 Group 15) are stakeholders in this project. They are involved with designing, implementing, documenting, and maintaining the library.

### 1.3 Mandated Constraints
#### 1.3.1 Programming Language
The scripting language used to develop the proposed project will be JavaScript (ES6).
#### 1.3.2 Project Distribution
The library will be distributed as an NPM package for Node.js applications.
#### 1.3.3 Operating System Requirements
This project is operating system independent and will be supported on all mainstream internet browsers.
#### 1.3.4 Software Requirements
Users must have Node.js installed on their development environments.
#### 1.3.5 Financial Considerations
The package will not be sold for profit by any party.
#### 1.3.6 Deadline Considerations
The project will be completed and submitted by April 12th 2022.
## 2 Functional Requirements
### 2.1 The Scope of the Work and the Product
#### 2.1.1 The Context of the Work
The proposed project is a standalone API that does not interact with other systems.
#### 2.1.2 Individual Product Use Cases
- Creating colour entities
- Converting between colour spaces 
- Accessing/mutating colour attributes 
- Mixing colours
- Exporting colours for web
- Validating colours for accessibility 
- Generating random colours
- Generating colour palettes
### 2.2 Functional Requirements
- The user shall be able to initialize / create colours given the appropriate user-defined colour parameters.
- The system must provide an interface for the user to convert between the following widely used colour spaces: RGB, HSV, HSL, HWB, CMYK, and HWB.
- The system must provide an interface for the user to access and mutate the following colour attributes: red, green, blue, hue, saturation (HSL), light, saturation (HSV), value, cyan, magenta, yellow, white, black, and alpha.
- The system must provide an interface for the user to perform the following useful colour manipulations and measurements: negation, rotation, grayscaling, contrast, colourfulness, temperature, and luminosity.
The system must provide an interface for the user to perform the following colour mixing and blending operations: mixing, toning, tinting, shading, normal, multiply, screen, overlay, darken, lighten, colour dodge, colour burn, hard light, soft light, difference, and exclusion.
- The system shall be able to parse and generate CSS colour strings and hexadecimal colour codes.
- The system shall be able to validate and correct colour combinations for compliance with WCAG recommendations for contrast.
- The system shall be able to initialize / create colours at random.
- The system shall be able to intelligently generate the following colour palettes according to standard colour theory principles: tones, tints, shades, analogous, complementary, split complementary, triadic, tetradic, and square.
## 3 Non-functional Requirements
### 3.1 Look and Feel Requirements
- Error messages must be concise and easy to identify
- Documentation must be intuitively organized in a way that facilitates searching for particular functionalities
### 3.2 Usability and Humanity Requirements
- There must be the option for the user to specify colours in a range of different standardized naming conventions
- Commands and the overall user-side implementation of this library must be easy to learn, which can be aided with thorough but concise documentation and intuitive naming conventions
- The outputs for each given task must be accurate with respect to the specified colour command
- The user must feel at ease when using this tool and feel that it meets all their fundamental needs in terms of colour generation and manipulation
### 3.3 Performance Requirements
- The system shall perform colour conversions and manipulations with a precision of 2 decimal places with respect to colour attribute values.
### 3.4 Operational and Environmental Requirements
- The system must be installable using NPM version 6.14.5.
- The system must have an unpacked size no greater than 20 kB.
- The system must not contain any network requests or require an internet connection to work (outside of installation).
### 3.5 Maintainability and Support Requirements
- The system's source code must be thoroughly documented with inline comments and complete API documentation of classes and methods
- The system's source code must be adhere to the team's predefined Coding Style Guidelines document.
- The system 's source code files, build configuration scripts, documentation files, and deliverable files shall be version controlled using GitLab. Generated files, dependancies, auxiliary files, and binary files shall not be version controlled
- The system's source code files, build configuration scripts, documentation files, and deliverable files shall contain a header tracking the dates and descriptions of the changes made to the files
- All GitLab Issues and Feature Branches created for this project must adhere to the team's predefined Git Guidelines document
- The project's GitLab repository shall be made public to allow for users to inspect source code and raise issues
### 3.6 Security Requirements
- The project will adhere to the principles of information hiding in order to protect the development details from being altered and only supplying the user with the most necessary methods without disclosing information about implementation
- The lockfile and the package.json file will be updated together to ensure that the lockfile can carryout its function and maintain the most recent version of the npm package
- Information will not be gathered through the use of this NPM package
### 3.7 Cultural Requirements
- Naming conventions will follow Canadian-English spelling and grammar rules
- Naming of colours will come from standardized registries and will not be a party to cultural colloquialisms
- The generation of palettes will be according to principles in colour theory and principles based on scientific accuracy
### 3.8 Legal 
- Any commercial use, distribution, modification, and liability surround- ing this project must be done in accordance to the original project's MIT License
- All activities and submissions for this project must be done in accor- dance to McMaster University's Academic Integrity Policy
