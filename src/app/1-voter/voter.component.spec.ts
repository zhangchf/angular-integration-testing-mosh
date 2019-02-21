import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('VoterComponent', () => {
  let fixture: ComponentFixture<VoterComponent>;
  let component: VoterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    }).compileComponents;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should Create', () => {
    expect(component).toBeTruthy();
  });

  it('totalVotes should be rendered correctly', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let ne: HTMLElement = de.nativeElement;
    expect(ne.innerText).toContain('21');
  });

  it('should have highlighted class when myVote is 1', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy();
  })
});
