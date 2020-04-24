# node-load-test
A minimal node.js web laod test framework, powered by loadtest.

# Getting started
  > git clone https://github.com/kgao/min.io.git
    
  > cd node-load-test/
  
  > npm install
  
  > npm start

  > 

# Test routing

  > http://localhost:3000/test/:id

## CovidSafe Backend API sequence

  0. HEAD /api/Messages/List
  1. GET /api/Messages/List
  2. POST /api/Message
  3. PUT /api/Messages/SeedReport
  4. PUT /api/Messages/AreaReport
