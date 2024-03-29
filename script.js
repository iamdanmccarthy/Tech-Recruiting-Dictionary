document.addEventListener('DOMContentLoaded', function() {
    let dictionaryTerms = [
        // Your terms go here
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
        
        { term: 'JavaScript', definition: 'A high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript is one of the core technologies of the web, enabling interactive web pages and is used by websites globally.' },
{ term: 'Python', definition: 'A high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.' },
{ term: 'Java', definition: 'A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA).' },
{ term: 'C#', definition: 'A multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.' },
{ term: 'Ruby', definition: 'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.' },
{ term: 'PHP', definition: 'A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.' },
{ term: 'C++', definition: 'A programming language that includes both high-level and low-level language features. It\'s regarded as an intermediate-level language, as it encapsulates both high- and low-level language features.' },
{ term: 'Swift', definition: 'A powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love.' },
{ term: 'Kotlin', definition: 'A modern programming language that makes developers happier. It\'s concise, safe, interoperable with Java and other languages, and provides many ways to reuse code between multiple platforms for productive programming.' },
{ term: 'Go', definition: 'Also known as Golang, is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.' },
{ term: 'Rust', definition: 'A multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references.' },
{ term: 'TypeScript', definition: 'An open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.' },
{ term: 'Scala', definition: 'A programming language designed to be concise, with a strong static type system. Many of Scala\'s design decisions were inspired by criticism of Java\'s shortcomings.' },
{ term: 'Elixir', definition: 'A dynamic, functional language designed for building scalable and maintainable applications. Elixir leverages the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems.' },
{ term: 'React', definition: 'A declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.' },
{ term: 'Vue.js', definition: 'A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.' },
{ term: 'Angular', definition: 'A platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.' },
{ term: 'Django', definition: 'A high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel.' },
{ term: 'Flask', definition: 'A micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.' },
{ term: 'Spring', definition: 'A comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. A key element of Spring is infrastructural support at the application level: Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.' },
{ term: 'Kafka', definition: 'A distributed event streaming platform designed for high-throughput, fault-tolerant messaging. Kafka is commonly used for building real-time data pipelines and streaming applications.' },
    { term: 'Elasticsearch', definition: 'A distributed, RESTful search and analytics engine built on top of Apache Lucene. Elasticsearch is designed for horizontally scalable, real-time search, and analysis of structured and unstructured data.' },
    { term: 'Logstash', definition: 'An open-source server-side data processing pipeline that ingests data from multiple sources, transforms it, and then sends it to a "stash" like Elasticsearch. Logstash is often used for log and event data collection.' },
    { term: 'Kibana', definition: 'An open-source data visualization dashboard for Elasticsearch. Kibana allows users to visualize data stored in Elasticsearch indices through charts, graphs, and maps.' },
    { term: 'Apache ZooKeeper', definition: 'A centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services. Kafka uses ZooKeeper for distributed coordination and metadata management.' },
    { term: 'Consumer Group', definition: 'A logical grouping of consumers that jointly consume a topic. Each consumer group receives a copy of the messages published to a topic, enabling parallel processing and load balancing.' },
    { term: 'Producer', definition: 'A component or application that publishes records (messages) to Kafka topics. Producers are responsible for choosing which topic partition to publish the message to.' },
    { term: 'Consumer', definition: 'A component or application that subscribes to topics and processes the records (messages) published to those topics. Consumers pull messages from Kafka brokers and process them based on their own logic.' },
    { term: 'Topic', definition: 'A category or stream name to which records (messages) are published. In Kafka, topics are partitioned and replicated across multiple brokers for fault tolerance and scalability.' },
    { term: 'Partition', definition: 'A portion of a Kafka topic\'s data. Topics are divided into partitions, allowing messages to be distributed across multiple brokers for parallel processing and scalability.' },
    { term: 'Replication Factor', definition: 'The number of copies of each partition in Kafka. Replication ensures fault tolerance and data availability by allowing Kafka to continue functioning even if some brokers fail.' },
    { term: 'Leader', definition: 'In Kafka, each partition has one leader and one or more followers (replicas). The leader is responsible for handling all read and write requests for the partition.' },
    { term: 'Follower', definition: 'In Kafka, a replica that copies data from the leader to stay synchronized. Followers are used for fault tolerance and high availability, allowing Kafka to continue operating even if the leader fails.' },
    { term: 'Indexing', definition: 'The process of storing and organizing data in Elasticsearch to make it searchable. Elasticsearch indexes data in near real-time, allowing users to search and analyze large volumes of data efficiently.' },
    { term: 'Document', definition: 'The basic unit of data in Elasticsearch, similar to a row in a relational database. Documents are JSON objects stored in Elasticsearch indices and are indexed and searchable.' },
    { term: 'Mapping', definition: 'A schema definition that describes the fields and properties of documents in an Elasticsearch index. Mappings define the data types, analyzers, and other settings used for indexing and searching documents.' },
    { term: 'Query DSL', definition: 'The query language used to search and retrieve data from Elasticsearch. Query DSL provides a flexible and powerful syntax for constructing complex queries, aggregations, and filters.' },
    { term: 'Aggregation', definition: 'A data summarization technique used in Elasticsearch to analyze and group data based on specific criteria. Aggregations allow users to perform calculations, statistics, and data visualization on indexed data.' },
    { term: 'Cluster', definition: 'A collection of one or more Elasticsearch nodes (servers) that work together to store and process data. Clusters provide scalability, fault tolerance, and high availability for Elasticsearch deployments.' },
    { term: 'Shard', definition: 'A subset of a single index\'s data in Elasticsearch. Indices are divided into multiple shards, which are distributed across nodes in a cluster. Sharding allows Elasticsearch to scale horizontally and distribute data for parallel processing.' }


        
    ];

    // Sort the dictionary terms alphabetically by the term name
    dictionaryTerms = dictionaryTerms.sort((a, b) => {
        if (a.term.toLowerCase() < b.term.toLowerCase()) {
            return -1;
        } else if (a.term.toLowerCase() > b.term.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    const dictionaryList = document.getElementById('dictionaryList');
    const searchInput = document.getElementById('searchInput');

    function displayTerms(terms) {
        const html = terms.map(t => `
            <div class="term">
                <h2>${t.term}</h2>
                <p>${t.definition}</p>
            </div>
        `).join('');
        dictionaryList.innerHTML = html;
    }

    function filterTerms(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredTerms = dictionaryTerms.filter(t => t.term.toLowerCase().includes(searchTerm));
        displayTerms(filteredTerms);
    }

    searchInput.addEventListener('keyup', filterTerms);

    // Display sorted terms initially
    displayTerms(dictionaryTerms);
});
