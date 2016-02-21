/// </// <reference path="../_all.ts" />

module PortfolioManagerApp{
    
    export interface IProjectService {
        loadAllProjects(): ng.IPromise<Project[]>;
        selectedProject: Project;
    }

    export class ProjectService implements IProjectService{
        static $inject = ['$q'];
        
        constructor(private $q: ng.IQService){
            
        }
        
        selectedProject: Project = null;
        
        loadAllProjects() : ng.IPromise<Project[]> {
            return this.$q.when(this.projects);
        }
        
        private projects: Project[] = [
            {
                name: 'Hoekstra Stock',
                shortDesc: 'Professionele website gemaakt voor Hoekstra Stock. Concurrentie waardig met andere websites zoals ShutterStock.'
            },
            {
                name: 'COGL',
                shortDesc: 'Voor mensen die op hoog niveau willen gamen is er COGL ontwikkeld. COGL is een platform waarmee je kunt meedoen aan toernooien van minder bekende/opkomende spellen.'
            },
            {
                name: 'Robot Spin',
                shortDesc: 'Robotische spin die meerdere opdrachten kan uitvoeren. Gemaakt in samenwerking met de opleiding Electro Techniek en Werktuig Bouwkunde aan het NHL.'
            }
        ]
    }
}