import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('VoterComponent', () => {
  let fixture: ComponentFixture<VoterComponent>;
  let component: VoterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoterComponent
      ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;

    // fixture.detectChanges();
  });

  it('Should Create', () => {
    expect(component).toBeTruthy();
  });
});
