
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import 'core-js/es7/reflect';

import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';
//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

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
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    console.log('should create');
    expect(TestBed.get(TodoService)).toBeTruthy();
  })

});
