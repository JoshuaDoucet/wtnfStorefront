## Application Pipeline Process.
1. Create a Docker container to ready the application before deployment
2. Install Node, AWS CLI, AWS EB on container
3. Install application dependencies
    * Install frontend dependencies
    * Install backend dependencies
4. Build applications
    * Build Angular bundle for frontend application
    * Build and transpile Typescript into Javascript for backend application
5. Deploy applications
    * Deploy frontend application to AWS S3
    * Deploy backend application to AWS EB