//Criando uma classe de component
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    // selector: 'app-course-list',
    templateUrl: "./course.list.component.html",
    // styleUrls: ["./course.list.component.css"]
})
//criei uma Class para para adicionar um array com as propriedes pre definidas no meu objeto course.ts
//desta forma posso exportar para o component.html atravez de {{course.'propriedade'}}   

export class CouseListComponent implements OnInit {

    filteredCourses: Course [] = []
    
    _courses: Course[] = [];
    
    _filterby: string;
    

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();

    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses
                this.filteredCourses = this._courses;
            },

            error: err => console.log ('Error',err)
        })
    }

    set filter(value: string) {
        this._filterby = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) >-1 ); 
    }

    get filter() {
        return this._filterby;
    }









}
