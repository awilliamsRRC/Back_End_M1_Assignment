# Debugging Analysis

## Scenario 1: Hello_World_DEBUG

-   **Breakpoint Location:** app.ts line 19
-   **Objective:** The process of initializing the web app(app) with GET response.

### Debugger Observations

-   **Variable States:** 
Name: “app”
Method: get
Path: ‘/’

-   **Call Stack:** 
1.	require('internal/modules/cjs/loader').Module.runMain(mainEntry);
2.	wrapModuleLoad(main, null, true);
3.	return onRequire().traceSync(Module._load, {
4.	return ReflectApply(fn, thisArg, args);
5.	module.load(filename);
6.	 Module._extensions[extension](this, filename);
7.	module._compile(content, filename, format);
8.	result = ReflectApply(compiledWrapper, thisValue, [exports, require, module, filename, dirname]);}
9.	app.get("/",(req:Request,res:Response) => {


    The call stack is used for setup and execution.
    Its loads main file with **1**. Prepare to run with **2**. Calls functioin dynamically with **4**


-   **Behavior:** 
    it's a web app used to handle get request. Its responds to clint with hello world.

### Analysis

-   What did you learn from this scenario?
        The creation of webs apps and its contents

-   Did you observe any unexpected behavior? If so, what might be the cause?
        No everything went well, providing there I activated npm start.
-   Are there areas for improvement or refactoring in this part of the code?
        No, It's a simple example.
-   How does this enhance your understanding of the overall project?
        it helps with undertsanding client-server.

## Scenario 2: Server_DEBUG

-   **Breakpoint Location:** line 11 in server.ts
-   **Objective:** How do server work?

### Debugger Observations

-   **Variable States:** 
    PORT = 3000
-   **Call Stack:** 
    
1.	require('internal/modules/cjs/loader').Module.runMain(mainEntry);
2.	wrapModuleLoad(main, null, true);
3.	return onRequire().traceSync(Module._load, {
4.	return ReflectApply(fn, thisArg, args);
5.	module.load(filename);
6.	Module._extensions[extension](this, filename);
7.  module._compile(content, filename, format);
8.	result = ReflectApply(compiledWrapper, thisValue,
9.	const server : Server =app.listen(PORT,() => {

    Each of these steps is crucial for preparing a Node.js application to run, from loading and compiling modules to starting the server.
    It starts with running the application **1**. prepares main module for further process **2**
    tracks where module sare loaded from **3** Apply appropriate file handler **6**
    Applies compile code,effecitvly excuting th emidules contents. Finally the application starts a server by listening on a specified port.


-   **Behavior:** [Describe what happens at this point in the program]
        initialized a server at port 3000 and listens.

### Analysis

-   What did you learn from this scenario?
        How to create a basic server.
-   Did you observe any unexpected behavior? If so, what might be the cause?
    I worked okay on the port.
-   Are there areas for improvement or refactoring in this part of the code?
    No
-   How does this enhance your understanding of the overall project?
    its seems more back=end to me, as in how parts work together.

## Scenario 3: Portofilio test

-   **Breakpoint Location:** line 3 portfolioPerformance.test.ts
-   **Objective:**  Its trying to see if my assest formula actuallly works.

### Debugger Observations

-   **Variable States:** 
    the variable were literally the functions
        function calculateAssetAllocation(assets)
        function calculatePortfolioPerformance(initial_money = 10000, current_money = 12000) {

-   **Call Stack:** 

    Call stack

    1.	require('internal/modules/cjs/loader').Module.runMain(mainEntry);
    2.	wrapModuleLoad(main, null, true);
    3.	return onRequire().traceSync(Module._load, {
    4.	return ReflectApply(fn, thisArg, args);
    5.	module.load(filename);
    6.	Module._extensions[extension](this, filename);
    7.	module._compile(content, filename, format);
    8.	result = ReflectApply(compiledWrapper, thisValue,
    9.	describe('calculatePortfolioPerformance', () => {

        The call stack shows the internal process Node.js follows to load and execute a module and, in this case, start a test suite. 
        Its load main file then prepares for execution, traces it and then compiles. Finally it reaches the test suite and runs the describe.

-   **Behavior:** 
    uses formula to checki its value is profit or loss

### Analysis

-   What did you learn from this scenario?
        Functions using typeScript
-   Did you observe any unexpected behavior? If so, what might be the cause?
        No.
-   Are there areas for improvement or refactoring in this part of the code?
        Yes, the formula could be simpler. I have to figure that out.
-   How does this enhance your understanding of the overall project?
        It good because i get to try out jest tests.