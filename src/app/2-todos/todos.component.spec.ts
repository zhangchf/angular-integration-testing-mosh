
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import 'core-js/es7/reflect';

import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';
import { from } from 'rxjs';
//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let fixture: ComponentFixture<TodosComponent>;
  let component: TodosComponent;
  let todoService: TodoService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    console.log('before each');
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    });

    console.log('before each get');
    httpClient = TestBed.get(HttpClient);
    console.log('httpClient: ' + httpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    todoService = fixture.debugElement.injector.get(TodoService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    console.log('should create');
    expect(TestBed.get(TodoService)).toBeTruthy();
  })

  it('should have the todos with a Observable call after init', () => {
    spyOn(todoService, 'getTodos').and.returnValue(from([[1, 2, 3]]));

    component.get();

    expect(component.todos.length).toBe(3);
  })

  it('should have the todos with a Promise Call after init, using async', async(() => {
    spyOn(todoService, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3, 4]));

    component.getWithPromise();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(4);
    })
  }))

  it('should have the todos with a Promise Call after init, using fakeAsync', fakeAsync(() => {
    spyOn(todoService, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3, 4]));

    component.getWithPromise();

    tick();
    expect(component.todos.length).toBe(4);
  }))

});
