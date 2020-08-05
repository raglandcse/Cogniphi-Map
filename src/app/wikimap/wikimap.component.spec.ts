import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikimapComponent } from './wikimap.component';

describe('WikimapComponent', () => {
  let component: WikimapComponent;
  let fixture: ComponentFixture<WikimapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikimapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikimapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
