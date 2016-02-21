/// <reference path="../_all.ts" />

module PortfolioManagerApp{    
    export class MainController{
        static $inject = ['projectService'];
        
        constructor(private projectService: IProjectService){
            var self = this;
            
            this.projectService
            .loadAllProjects()
            .then((projects: Project[]) => {
                self.projects = projects;
                console.log(self.projects);
            });
        }
        
        projects: Project[] = [];
        message: string = "Hello from controller";
    }
}