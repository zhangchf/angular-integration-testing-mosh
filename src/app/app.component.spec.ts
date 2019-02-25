import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  })

  it('should have a router link for todos', () => {
    let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = de.findIndex(val => val.attributes['routerLink'] === 'todos');
    
    expect(index).toBeGreaterThan(-1);
  })
});
