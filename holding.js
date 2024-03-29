const dictionaryTerms = [
{ term: 'Cloud', definition: 'A global network of remote servers hooked up to the Internet to store, manage, and process data.' },
{ term: 'Framework', definition: 'An abstraction in which software providing generic functionality can be selectively changed by additional user-written code.' },
{ term: 'Ruby on Rails', definition: 'A server-side web application framework written in Ruby under the MIT License.' },
{ term: 'API', definition: 'Application Programming Interface, a set of routines, protocols, and tools for building software applications. It specifies how software components should interact.' },
{ term: 'Agile', definition: 'A method of project management used in software development, emphasizing incremental delivery, team collaboration, continual planning, and continual learning.' },
{ term: 'DevOps', definition: 'A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the system development lifecycle and provide continuous delivery.' },
{ term: 'Git', definition: 'A distributed version control system used for tracking changes in source code during software development.' },
{ term: 'Continuous Integration', definition: 'A software development practice where developers frequently merge their code changes into a central repository, after which automated builds and tests are run.' },
{ term: 'SCRUM', definition: 'An agile framework for managing knowledge work, with an emphasis on software development. It is designed for teams of three to nine members who break their work into actions that can be completed within timeboxed iterations.' },
{ term: 'SOLID', definition: 'A mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.' },
{ term: 'Microservices', definition: 'An architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities.' },
{ term: 'Machine Learning', definition: 'A branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.' },
{ term: 'Blockchain', definition: 'A distributed database that is used to maintain a continuously growing list of records, called blocks, which are linked using cryptography.' },
{ term: 'Cloud Computing', definition: 'The delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.' },
{ term: 'Containerization', definition: 'A lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment.' },
{ term: 'Big Data', definition: 'Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations, especially relating to human behavior and interactions.' },
{ term: 'RESTful API', definition: 'An architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating, and deleting of operations concerning resources.' },
{ term: 'TDD', definition: 'Test-Driven Development, a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only.' },
{ term: 'UX/UI Design', definition: 'User Experience and User Interface Design, aspects of software design focused on the optimal user experience and interface.' },
{ term: 'CI/CD', definition: 'Continuous Integration and Continuous Delivery or Continuous Deployment, a method to frequently deliver apps to customers by introducing automation into the stages of app development.' },
{ term: 'Open Source', definition: 'Software for which the original source code is made freely available and may be redistributed and modified.' },
{ term: 'Serverless Architecture', definition: 'A software design pattern where applications are hosted by a third-party service, eliminating the need for server software and hardware management by the developer.' },
{ term: 'Functional Programming', definition: 'A programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.' },
{ term: 'Algorithm', definition: 'A step-by-step procedure for calculations, data processing, and automated reasoning tasks.' },
{ term: 'Data Structure', definition: 'A particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently.' },
{ term: 'Object-Oriented Programming (OOP)', definition: 'A programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures.' },
{ term: 'Concurrency', definition: 'A condition that exists when at least two threads are making progress. A more generalized form of parallelism that can include multiprogramming.' },
{ term: 'Garbage Collection', definition: 'A form of automatic memory management. The garbage collector attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program.' },
{ term: 'Hashing', definition: 'A technique used to uniquely identify a specific object from a group of similar objects. Hash functions accelerate table or database lookup by detecting duplicated records in a large file.' },
{ term: 'Immutable Object', definition: 'An object whose state cannot be modified after it is created. This is especially useful in concurrent applications.' },
{ term: 'Integration Testing', definition: 'A level of software testing where individual units are combined and tested as a group. The purpose is to expose faults in the interaction between integrated units.' },
{ term: 'Latency', definition: 'The delay before a transfer of data begins following an instruction for its transfer. It is measured in time units or rounds.' },
{ term: 'Load Balancing', definition: 'The process of distributing a set of tasks over a set of resources, with the aim of making their overall processing more efficient.' },
{ term: 'NoSQL', definition: 'A type of database designed to handle a wide variety of data models, including key-value, document, columnar, and graph formats. NoSQL databases are often used for large sets of distributed data.' },
{ term: 'Polymorphism', definition: 'The provision of a single interface to entities of different types. It allows the same interface to be used for different underlying forms (data types).' },
{ term: 'Refactoring', definition: 'The process of restructuring existing computer code—changing the factoring—without changing its external behavior.' },
{ term: 'Regular Expression', definition: 'A sequence of characters that define a search pattern. Usually used by string-searching algorithms for "find" or "find and replace" operations on strings, or for input validation.' },
{ term: 'Scalability', definition: 'The capability of a system, network, or process to handle a growing amount of work, or its potential to be enlarged to accommodate that growth.' },
{ term: 'Singleton Pattern', definition: 'A software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.' },
{ term: 'Software Architecture', definition: 'The fundamental structures of a software system and the discipline of creating such structures and systems. Each structure comprises software elements, relations among them, and properties of both.' },
{ term: 'Unit Testing', definition: 'A software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use.' },
{ term: 'Virtual Machine', definition: 'An emulation of a computer system. Virtual machines are based on computer architectures and provide functionality of a physical computer. Their implementations may involve specialized hardware, software, or a combination.' },
{ term: 'Web Services', definition: 'Software systems designed to support interoperable machine-to-machine interaction over a network. They have an interface described in a machine-processable format (specifically WSDL). Other systems interact with the web service in a manner prescribed by its description using SOAP messages, typically conveyed using HTTP with an XML serialization in conjunction with other web-related standards.' },


        // Add more terms here
    ];