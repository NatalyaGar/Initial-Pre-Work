# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.
When we hit https://www.techtonic.com/ into the browser the first thing that happens is a Domain Name Server (DNS) matches “www.thcktonic.com” to an IP address. Then the browser sends an HTTP request to the server and the server sends back an HTTP response. The browser begins rendering the HTML on the page while also requesting any additional resources such as CSS, JavaScript, images, etc. Each subsequent request completes a request/response cycle and is rendered in turn by the browser. Then once the page is loaded some sites will make further asynchronous requests.

## From start to finish, how does data reach you to be rendered in the browser?
(Found this answer on StackOverflow. I decided to copy this text because it have very good explanation)
1.	You type an URL into address bar in your preferred browser.
2.	The browser parses the URL to find the protocol, host, port, and path.
3.	It forms a HTTP request (that was most likely the protocol)
4.	To reach the host, it first needs to translate the human readable host into an IP number, and it does this by doing a DNS lookup on the host
5.	Then a socket needs to be opened from the user’s computer to that IP number, on the port specified (most often port 80)
6.	When a connection is open, the HTTP request is sent to the host. The host forwards the request to the server software (most often Apache) configured to listen on the specified port
7.	The server inspects the request (most often only the path), and launches the server plugin needed to handle the request (corresponding to the server language you use, PHP, Java, .NET, Python?)
8.	The plugin gets access to the full request, and starts to prepare a HTTP response.
9.	To construct the response a database is (most likely) accessed. A database search is made, based on parameters in the path (or data) of the request
10.	Data from the database, together with other information the plugin decides to add, is combined into a long string of text (probably HTML).
11.	The plugin combines that data with some meta data (in the form of HTTP headers), and sends the HTTP response back to the browser.
12.	The browser receives the response, and parses the HTML (which with 95% probability is broken) in the response
13.	A DOM tree is built out of the broken HTML
14.	New requests are made to the server for each new resource that is found in the HTML source (typically images, style sheets, and JavaScript files).
15.	Go back to step 3 and repeat for each resource.
16.	Stylesheets are parsed, and the rendering information in each gets attached to the matching node in the DOM tree
17.	JavaScript is parsed and executed, and DOM nodes are moved and style information is updated accordingly
18.	The browser renders the page on the screen according to the DOM tree and the style information for each node
19.	You see the page on the screen
(Found this answer on StackOverflow)


## What code is rendered in the browser?
Browser receives HTML and generated tree called DOM. When browser delivers CSS code this generates tree called CSSOM. With the two processes of parsing concluded (DOM, CSSOM), the browser creates a render tree. Once the render tree is complete, browser execute reflow process for positioning elements on the screen. After that browser update some style that is not about layout, if needed. This process called repaint.


## What is the server-side code’s main function?
Server-side code's main function runs on server dealing with the generation of content of web page.Functions like querying and operations over databases, structure web applications, process user input, access and write a file on server.


## What is the client-side code’s main function?
Client-side code's main function runs on the client machine(browser) and deals with the user interface/display.Functions like reading and writing cookies, interact with temporary and local storages, send request to server, work as a interface between server and user.  


## What is runtime?
In my understanding runtime is the time when the program is run or executed on a computer system. It is time when program begins running until it is closed by the user or the operating system.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
Client-side languages used for front-end development.
HTML and CSS used in site building.
JavaScript used for adding loading effects and animates elements on the site.
Bootstrap is an HTML, CSS, JS framework with many components that let you create beautiful and modern web sites or web applications very fast. It requires jQuery- client-side JavaScript library. jQuery designed to simplify JavaScript coding process.
Ajax allows to load specific parts of the website without full site refresh. Ajax uses XML and JSON to transfer site content from the server to browser.
FontAwesome library allows to add different icons to the site without image upload, edit size, colors, shadows.


## How many instances of the server-side code are available at any given time?
Server-side code is run on a web server and that its main role is to control what information is sent to the user. Data pulled out of a database stored on a server and sent to the client to be displayed. Web browsers communicate with web servers using HyperTextTransferProtocol(HTTP). When you click a link on a web page, submit a form, or run a search, an HTTP request is sent from your browser to the target server. The request includes a URL identifying the affected resource, a method that defines the required action (for example to get, delete, or post the resource). Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP response message. The body of a successful response to a request would contain the requested resource (e.g. a new HTML page, or an image, etc...), which could then be displayed by the web browser.Popular server-side web languages include PHP, Python, Ruby, C#, and NodeJS(JavaScript). 


## How many instances of the databases connected to the server application are created?
A database instance is a set of memory structures that manage database files. A database is a set of physical files on disk. The instance manages its associated data and serves the users of the database. Database administrators might create multiple instances of the same database for different purposes. Different instances: production (used to contain live data), pre-production (used to test new functionality prior to release into production) and development (used by database developers to create new functionality).
