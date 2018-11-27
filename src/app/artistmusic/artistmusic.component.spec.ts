import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistmusicComponent } from './artistmusic.component';

describe('ArtistmusicComponent', () => {
  let component: ArtistmusicComponent;
  let fixture: ComponentFixture<ArtistmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
